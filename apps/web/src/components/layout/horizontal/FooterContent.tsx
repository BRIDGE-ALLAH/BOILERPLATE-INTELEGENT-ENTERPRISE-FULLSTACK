'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'
import { getBranding } from '@repo/constants'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()
  const branding = getBranding()

  return (
    <div
      className={classnames(horizontalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p className='text-textSecondary'>{branding.legal.copyright}</p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <Link href={branding.urls.docs} target='_blank' className='text-primary'>
            Documentation
          </Link>
          <Link href={branding.urls.support} target='_blank' className='text-primary'>
            Support
          </Link>
          <Link href={branding.urls.privacy} className='text-primary'>
            Privacy
          </Link>
          <Link href={branding.urls.terms} className='text-primary'>
            Terms
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
