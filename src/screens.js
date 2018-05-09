import { Navigation } from 'react-native-navigation'
import QrReader from './QrReader'

export function registerScreens()
{
    Navigation.registerComponent('webapp.QrReader', () => QrReader)
}
