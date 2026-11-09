'use client'

// Type Imports
import Navbar from '@layouts/components/horizontal/Navbar'

import LayoutHeader from '@layouts/components/horizontal/Header'

import useHorizontalNav from '@menu/hooks/useHorizontalNav'

import type { getDictionary } from '@/utils/getDictionary'

// Component Imports
import Navigation from './Navigation'
import NavbarContent from './NavbarContent'

// Hook Imports

const Header = ({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <>
      <LayoutHeader>
        <Navbar>
          <NavbarContent />
        </Navbar>
        {!isBreakpointReached && <Navigation dictionary={dictionary} />}
      </LayoutHeader>
      {isBreakpointReached && <Navigation dictionary={dictionary} />}
    </>
  )
}

export default Header
