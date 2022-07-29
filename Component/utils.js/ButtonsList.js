import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export const shop=(value)=> <Fontisto name="shopping-store" size={24} color={value} /> 
export const msg=(value)=> <Feather name="message-square" size={24} color={value} />
export const folder=(value)=><Feather name="folder" size={24} color={value} />
export const home=(value)=><Octicons name="home" size={24} color={value} />
export const bin=(value)=><Feather name="trash-2" size={24} color={value} />
export const que=(value)=><Octicons name="question" size={24} color={value} />
export const bell=(value)=><MaterialCommunityIcons name="bell-outline" size={24} color={value} />
export const setting=(value)=><AntDesign name="setting" size={24} color={value} />
