import {JetBrains_Mono, Lusitana, Inter} from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({subsets: ['latin']})
export const jetbrains = JetBrains_Mono({ subsets: ['latin']})

export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin']
})

export const gitlabSans = localFont({src: "../../public/GitLabSans.woff2"})

