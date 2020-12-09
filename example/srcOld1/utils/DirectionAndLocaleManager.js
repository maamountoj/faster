import React, { useState, useEffect } from 'react'
import { ConfigProvider, Radio } from 'antd'

import arAR from 'antd/es/locale/ar_EG'
import enUS from 'antd/es/locale/en_US'
import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

function DirectionAndLocaleManager({ children }) {
	const { t, i18n } = useTranslation()
	const [direction, setDirection] = useState('rtl')
	const locale = useSelector((state) => state.locale.locale)

	useEffect(() => {
		i18n.changeLanguage(locale === 'ltr' ? 'en' : 'ar')
	}, [locale])

	return (
		<ConfigProvider
			direction={locale}
			locale={locale === 'rtl' ? arAR : enUS}
		>
			{children}
		</ConfigProvider>
	)
}

export default DirectionAndLocaleManager
