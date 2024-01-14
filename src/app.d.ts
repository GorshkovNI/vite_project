declare global {
    declare type RootState = import('@/1-app/store/store').RootState
    declare type AppDispatch = import('@/1-app/store/store').AppDispatch
}

export {}
