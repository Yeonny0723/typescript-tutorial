interface LocalStorageAPI<T> {
    [key:string]: T;
}

class LocalStorage<T> {  
    private storage:LocalStorageAPI<T> = {}
    setItem(key:string, value:T){
        this.storage[key] = value;
    }
    getItem(key:string){
        return this.storage[key]
    }
    clearItem(key:string){
        delete this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<String>() 
stringStorage.setItem("name", "juyeon")
console.log(stringStorage.getItem("name"))
stringStorage.clearItem("name")
console.log(stringStorage.getItem("name"))
stringStorage.clear()

// Generic 타입을 사용하면 서로 다른 타입을 물려줄 수 있다. polymorphism 구현 가능!
const booleanString = new LocalStorage<boolean>() 
booleanString.setItem("above 30",false)


interface GeolocationAPI {
    // 유저 현재 position 오브젝트 반환
    getCurrentPosition(successFn:IsuccessFn, errorFn?: IerrorFn, optionsObj?: Ioption): void,
    // 유저 위치가 바뀌면 실행할 콜백함수 반환
    watchPosition(success:IsuccessFn, error?:IerrorFn, options?:Ioption): string,
    // WatchPosition을 실행하며 생성된 핸들러 제거 
    clearWatch(id:number): void,
}

interface Ioption {
    maximumAge: number,
    timeout: number,
    enableHighAccuracy: boolean,
}

interface IerrorFn{
    (positionError: PositionError): void;
}

interface PositionError {
    readonly code: string,
    readonly message: string,
}

interface IsuccessFn {
    (position: Position): void;
}

interface Position {
    coords: Coords;
    timestamp: string;
}

interface Coords {
    readonly latitude: number,
    readonly longitude: number,
    readonly altitude: number | null,
    readonly accuracy: number,
    readonly altitudeAccuracy: number | null,
    readonly heading: number | null,
    readonly speed: number | null,
}

class CustomGeolocation implements GeolocationAPI {
    getCurrentPosition(
        successFn:IsuccessFn, errorFn?: IerrorFn, optionsObj?: Ioption
    ){
        if (errorFn) {};
        if (optionsObj) {};
    }
    watchPosition(
        success:IsuccessFn, error?:IerrorFn, options?:Ioption
    ){
        if (error) {};
        if (options) {};
        return "random string"
    }
    clearWatch(id:number){
        if (id){};
    }
}

const geolocation = new CustomGeolocation()

const tempFn = () => {}
const tempOption = {
    maximumAge: 10,
    timeout: 10,
    enableHighAccuracy: false,
}

// 다른 개수의 파라미터 전달 가능. Overloading 구현!
geolocation.getCurrentPosition(tempFn)
geolocation.getCurrentPosition(tempFn, tempFn)
geolocation.getCurrentPosition(tempFn, tempFn, tempOption)