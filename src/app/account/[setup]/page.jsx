import AccountSetup from '@/components/AccountSetup'
import React from 'react'

const AccountSetupPage = ({ params }) => {
   return (
      <AccountSetup setup={params.setup} />
   )
}

export default AccountSetupPage