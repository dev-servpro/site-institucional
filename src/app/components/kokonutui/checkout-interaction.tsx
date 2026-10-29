"use client";

import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus, ShoppingCart, CreditCard } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  getPlanoByURI,
  getProductsByPlano,
  Product,
  productsCategories,
} from "../../../data/produtos";
import { useDispatch } from "react-redux";
import OrcamentoMaisDetalhes from "../orcamento/orcamento-mais-detalhe";
import {
  addItemToCart,
  removeItemInTheCart,
} from "@/lib/redux/features/cart/cart-slice";
import Link from "next/link";
import { cartToSearchParams } from "@/utils/cart-to-search-params";

// Separate Cart Item Component
interface CartItemProps {
  item: { cod: string; quantity: number };
  product: Product;
  onIncrease: () => void;
  onDecrease: () => void;
}

function CartItem({ item, product, onIncrease, onDecrease }: CartItemProps) {
  const itemTotal = product.price * item.quantity;

  return (
    <motion.div
      key={item.cod}
      layout
      initial={{ opacity: 0, scale: 0.96, height: 0 }}
      animate={{ opacity: 1, scale: 1, height: "auto" }}
      exit={{ opacity: 0, scale: 0.96, height: 0 }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        height: { duration: 0.3 },
        layout: { duration: 0.2 },
      }}
      className={cn(
        "flex gap-3",
        "p-3 rounded-lg",
        "bg-zinc-50 dark:bg-zinc-800/50",
        "border border-transparent",
        "hover:border-zinc-200 dark:hover:border-zinc-700",
        "transition-colors duration-200"
      )}
    >
      <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="min-w-0 flex-1">
            <h4 title={product.name} className="text-sm font-medium text-zinc-900 dark:text-zinc-100 max-w-[200px] truncate">
              {product.name}
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              <NumberFlow
                value={product.price}
                willChange
                format={{
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }}
                className="font-mono"
              />
              {" cada"}
            </p>
          </div>

          <motion.div
            layout
            className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex-shrink-0"
          >
            <NumberFlow
              value={itemTotal}
              willChange
              format={{
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }}
              className="font-mono"
            />
          </motion.div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onDecrease}
              className={cn(
                "p-1.5 rounded-md",
                "hover:bg-zinc-200 dark:hover:bg-zinc-700",
                "transition-colors duration-150",
                "text-zinc-600 dark:text-zinc-400"
              )}
            >
              <Minus className="w-3 h-3" />
            </motion.button>

            <motion.span
              layout
              className={cn(
                "text-sm font-medium text-zinc-900 dark:text-zinc-100",
                "min-w-[32px] inline-block text-center",
                "px-2 py-1 rounded-md",
                "bg-zinc-100 dark:bg-zinc-800"
              )}
            >
              {item.quantity}
            </motion.span>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onIncrease}
              className={cn(
                "p-1.5 rounded-md",
                "hover:bg-zinc-200 dark:hover:bg-zinc-700",
                "transition-colors duration-150",
                "text-zinc-600 dark:text-zinc-400"
              )}
            >
              <Plus className="w-3 h-3" />
            </motion.button>
          </div>

          <span className="text-xs text-zinc-500 dark:text-zinc-400 flex-shrink-0">
            {item.quantity} × {product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Main Cart Component
interface CartSidebarProps {
  className?: string;
  showCheckoutButton?: boolean;
}

export function CartSidebar({
  className,
  showCheckoutButton = true,
}: CartSidebarProps) {
  const { cart, plano: planoURI } = useAppSelector((state) => state.cart);
  const plano = getPlanoByURI(planoURI);
  const dispatch = useDispatch();

  const products = getProductsByPlano(plano);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.cod === item.cod);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const handleIncreaseItem = (cod: string) => {
    dispatch(addItemToCart(cod));
  };

  const handleDecreaseItem = (cod: string) => {
    dispatch(removeItemInTheCart(cod));
  };

  const isEmpty = cart.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "w-96 flex flex-col h-full max-h-[600px]",
        "p-4 rounded-xl",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Carrinho
          </h2>
          <motion.span
            key={totalItems}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className={cn(
              "px-2 py-0.5 text-xs rounded-full",
              "bg-primary text-primary-foreground",
              "font-medium"
            )}
          >
            {totalItems}
          </motion.span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-auto">
        <AnimatePresence mode="popLayout">
          {isEmpty ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-40 text-center"
            >
              <ShoppingCart className="w-8 h-8 text-zinc-300 dark:text-zinc-600 mb-2" />
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Seu carrinho está vazio
              </p>
            </motion.div>
          ) : (
            <ScrollArea className="h-full max-h-[500px]">
              <div className="space-y-2 pr-2">
                {cart.map((item) => {
                  const product = products.find((p) => p.cod === item.cod);
                  if (!product) return null;

                  return (
                    <CartItem
                      key={item.cod}
                      item={item}
                      product={product}
                      onIncrease={() => handleIncreaseItem(item.cod)}
                      onDecrease={() => handleDecreaseItem(item.cod)}
                    />
                  );
                })}
              </div>
            </ScrollArea>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      {!isEmpty && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "pt-4 mt-4 space-y-3",
            "border-t border-zinc-200 dark:border-zinc-800"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Total
            </span>
            <motion.div
              layout
              className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
            >
              <NumberFlow
                value={totalPrice}
                willChange
                format={{
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }}
                className="font-mono tabular-nums"
                transformTiming={{
                  duration: 400,
                  easing: "ease-out",
                }}
              />
            </motion.div>
          </div>

          <div className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
            {totalItems} {totalItems === 1 ? "item" : "itens"} no carrinho
          </div>

          {showCheckoutButton && (
            <Button asChild size="sm" className="w-full gap-2">
              <Link href={`/checkout/${planoURI}?${cartToSearchParams(cart)}`}>
                <CreditCard className="w-4 h-4" />
                Finalizar Orçamento
              </Link>
            </Button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

// Product List Component
interface ProductListProps {
  data: Product[];
  className?: string;
}

export function ProductList({ data, className }: ProductListProps) {
  const dispatch = useDispatch();

  return (
    <ScrollArea
      style={{ scrollbarWidth: "thin" }}
      className={cn("xl:h-[450px] 2xl:h-[600px] pr-4 py-1 flex-1", className)}
    >
      {data.map((product) => (
        <motion.div
          key={product.cod}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: Math.random() * 0.1 }}
          className={cn(
            "group",
            "p-4 rounded-xl my-3 first-of-type:mt-0 last-of-type:mb-0",
            "bg-white dark:bg-zinc-900",
            "border border-zinc-200 dark:border-zinc-800",
            "hover:border-zinc-300 dark:hover:border-zinc-700",
            "transition-colors duration-200"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "relative w-16 h-16 rounded-lg overflow-hidden",
                  "bg-zinc-100 dark:bg-zinc-800",
                  "transition-colors duration-200",
                  "group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                )}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <span>
                    <NumberFlow
                      value={product.price}
                      willChange
                      format={{
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }}
                      className="font-mono tabular-nums"
                      transformTiming={{
                        duration: 400,
                        easing: "ease-out",
                      }}
                    />
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary font-medium dark:bg-zinc-800 text-primary-foreground dark:text-zinc-400">
                    {
                      productsCategories.find(
                        (categorie) => categorie.value === product.category
                      )!.label
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <OrcamentoMaisDetalhes product={product} />
              <Button
                onClick={() => dispatch(addItemToCart(product.cod))}
                size="sm"
                variant="outline"
                className="gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                Add
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </ScrollArea>
  );
}

// Main Checkout Component (now simplified)
interface CheckoutInteractionProps {
  data?: Product[];
}

export default function CheckoutInteraction({
  data,
}: CheckoutInteractionProps) {
  if (!data) return null;

  return (
    <div className="w-full mx-auto">
      <div className="flex gap-6">
        <CartSidebar className="sticky top-4" />
        <ProductList data={data} />
      </div>
    </div>
  );
}
