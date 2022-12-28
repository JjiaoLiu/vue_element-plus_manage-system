import {type Language} from "element-plus/lib/locale";
import {InjectionKey, Ref} from "vue";
export const language = Symbol() as InjectionKey<Ref<Language>>;
