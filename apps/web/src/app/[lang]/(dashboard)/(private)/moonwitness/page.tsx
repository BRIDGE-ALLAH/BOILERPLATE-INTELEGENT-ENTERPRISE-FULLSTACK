// MoonWitness landing page - redirects to Observatory

import { redirect } from 'next/navigation'

import { brandProduct } from '@repo/brand'

export default function MoonWitnessLanding() {
  redirect(`/${brandProduct.slug}/${brandProduct.pages.observatory}`)
}