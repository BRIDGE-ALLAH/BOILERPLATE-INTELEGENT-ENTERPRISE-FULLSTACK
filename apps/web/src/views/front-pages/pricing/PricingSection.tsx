// Third-party Imports
import classnames from 'classnames'

// Type Imports

// Component Imports
import Pricing from '@components/pricing'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

import type { PricingPlanType } from '@/types/pages/pricingTypes'

const PricingSection = ({ data }: { data: PricingPlanType[] }) => {
  return (
    <section className='plb-[100px] pbs-[70px] -mbs-[70px]'>
      <div className={classnames('pbs-[50px] md:pbs-[100px]', frontCommonStyles.layoutSpacing)}>
        <Pricing data={data} />
      </div>
    </section>
  )
}

export default PricingSection
