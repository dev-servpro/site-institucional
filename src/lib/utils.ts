import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pegarImagemDasCategoriasDoSistemaDeVendas(url: string) {
  return `https://vendas.redeservpro.com.br/uploaded/produtos-categorias/${url}`;
}

export function pegarImagemDosProdutosDoSistemaDeVendas(url: string) {
  return `https://vendas.redeservpro.com.br/uploaded/produtos/${url}`;
}

/**
 * Capitalizes the first letter of each word in a text string
 * @param text The text to capitalize
 * @param lowerRest Whether to lowercase the rest of each word (default: false)
 * @returns The capitalized text
 */
export function capitalizeText(
  text: string,
  lowerRest: boolean = false
): string {
  if (!text) return "";

  return text
    .split(" ")
    .map((word) => {
      if (!word.length) return word;
      const firstChar = word.charAt(0).toUpperCase();
      const restOfWord = lowerRest
        ? word.slice(1).toLowerCase()
        : word.slice(1);
      return `${firstChar}${restOfWord}`;
    })
    .join(" ");
}

export function gerarUrlAmigavel(texto: string) {
  if (!texto) return "";
  // Converter para minúsculas
  texto = texto.toLowerCase();
  // Substituir caracteres acentuados e especiais por suas versões sem acento
  texto = texto
    .replace(/[áàãâä]/g, "a")
    .replace(/[éèêë]/g, "e")
    .replace(/[íìîï]/g, "i")
    .replace(/[óòõôö]/g, "o")
    .replace(/[úùûü]/g, "u")
    .replace(/[ç]/g, "c");

  // Substituir espaços por hífens
  texto = texto.replace(/\s+/g, "-"); // Substitui espaços por hífen

  // Remover caracteres não alfanuméricos, exceto hífens
  texto = texto.replace(/[^a-zA-Z0-9-]/g, ""); // Remove caracteres especiais

  // Substituir múltiplos hífens consecutivos por um único hífen
  texto = texto.replace(/-+/g, "-"); // Elimina hífens duplos ou mais

  return texto;
}

export function extractBulletPoints(htmlString: string): string[] {
  // Match all <li>...</li> and extract the inner content
  const regex = /<li>(.*?)<\/li>/g;
  const matches = [];
  let match;
  while ((match = regex.exec(htmlString)) !== null) {
    // Decode HTML entities if needed
    const text = match[1]
      .replace(/&aacute;/g, "á")
      .replace(/&eacute;/g, "é")
      .replace(/&iacute;/g, "í")
      .replace(/&oacute;/g, "ó")
      .replace(/&uacute;/g, "ú")
      .replace(/&ccedil;/g, "ç")
      .replace(/&atilde;/g, "ã")
      .replace(/&otilde;/g, "õ")
      .replace(/&ecirc;/g, "ê")
      .replace(/&ocirc;/g, "ô")
      .replace(/&uuml;/g, "ü")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
    matches.push(text);
  }
  return matches;
}
