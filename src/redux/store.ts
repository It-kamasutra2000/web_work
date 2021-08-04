import { featureReducer } from './feature-reducer';
import { footerReducer } from './footer-reducer';
import { trackingReducer } from './tracking-reducer';
import { ContentReducer } from './content-reducer';
import { combineReducers, createStore } from "redux";
import { customersReducer } from './customers-reducer';
import { performanceReducer } from './performance-reducer';
import { screenshotsReducer } from './screenshots-reducer';


const rootReducer = combineReducers({
    content: ContentReducer,
    screenshots: screenshotsReducer,
    feature: featureReducer,
    performance: performanceReducer,
    tracking: trackingReducer,
    customers: customersReducer,
    footer: footerReducer
})


type TypeWithInfer<T> = T extends {[key: string]: infer U} ? U : any
export type GetActionsType<T extends {[key: string]: (...args: any) => any}> = ReturnType<TypeWithInfer<T>>   
export type StateType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer)


//@ts-ignore
window._store = store
export default store