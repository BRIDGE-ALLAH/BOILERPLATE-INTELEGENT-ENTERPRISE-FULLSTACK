// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import NotFound from '@views/NotFound'

// Config Imports
import { i18n, resolveLocale } from '@configs/i18n'

// Util Imports
import { getServerMode, getSystemMode } from '@core/utils/serverHelpers'

const NotFoundPage = async (props: { params: Promise<{ lang: string }> }) => {
  const params = await props.params

  const lang: Locale = resolveLocale(params.lang)

  // Vars
  const direction = i18n.langDirection[lang]
  const mode = await getServerMode()
  const systemMode = await getSystemMode()

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>
        <NotFound mode={mode} />
      </BlankLayout>
    </Providers>
  )
}

export default NotFoundPage
