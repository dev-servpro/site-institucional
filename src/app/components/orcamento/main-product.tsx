"use client"

import { useSearchParams } from "next/navigation"

export default function MainProductOrcamento(){
  const params = useSearchParams()
  return <div>{params.get("prod")}</div>
}