import { Action } from "redux"
import * as _ from 'lodash'


export interface Iproducts{
        id:number
        name:string
        price:number | null
        state:string
        imgAdress:string
        seller: string
        type: string
        desc: string
}

const exampleProducts:Array<Iproducts> = [
    {
        desc: "Pojemność 1 TB↵Dysk dysponuje ogólną pojemnością wynoszącą 1 TB, która gwarantuje bezproblemową instalację systemu operacyjną oraz wszystkich najnowszych aktualizacji. Przestrzeń dyskowa może zostać także w łatwy sposób podzielona na partycje, dzięki czemu użytkownik ma możliwość sprawnego zarządzania plikami. Dysk twardy 1 TB okaże się wystarczający do codziennego użytku domowego, sprawdzi się również w biurze, w komputerze gamingowym, a także w konfiguracjach wykorzystywanych do obsługi programów specjalistycznych.↵↵↵Format 2,5”↵Dysk został przygotowany w formacie 2,5 cala, dzięki czemu może być montowany nie tylko w dużych obudowach typu Full Tower, ale również w znacznie mniejszych konstrukcjach. Znajdzie zastosowanie zarówno w komputerach domowych, jak i zestawach biurowych (także tych stawiających na miniaturyzację) czy też w konfiguracjach specjalistycznych, dostosowanych do obsługi programów i narzędzi szczególnie wymagających pod względem sprzętowym. Wykonana konstrukcja gwarantuje stabilną pracę w dysku w każdych warunkach.↵↵↵Prędkość obrotowa 5400 obr./min↵Dysk twardy pracuje z prędkością wynoszącą 5400 obrotów na minutę, dlatego też dobrze sprawdza się zarówno w ramach użytku domowego, jak i biurowego bądź biznesowego. Zapewni efektywną obsługę systemu operacyjnego, a także sprawną realizację podstawowych zadań. Okaże się również wystarczający do przenoszenia danych między folderami i partycjami, jak również z użyciem nośników zewnętrznych. Wykonanie dysku zapewnia stabilną pracę oraz korzystne parametry użytkowe, które sprawdzą się w domu, w pracy i w szkole.↵↵↵Interfejs SATA II↵Urządzenie jest zgodne z interfejsem SATA II. Jego parametr przepustowości wynosi maksymalnie 3 Gbit/s. Magistrala obsługuje między innymi kolejkowanie zadań, które zwiększa efektywność działania dysku twardego, technologię powielacza portów oraz wyznacznika portu. Dysk twardy SATA II może zostać wykorzystany w komputerach domowych, biurowych i biznesowych. Zapewni stabilną obsługę systemu operacyjnego, kolejnych aktualizacji, a także instalowanych programów oraz narzędzi różnej kategorii.↵↵↵Interfejs SATA III↵Dysk twardy działa w oparciu o interfejs SATA III, którego przepustowość maksymalna wynosi 6 Gbit/s. Jest to odpowiedni parametr do codziennej pracy w komputerach domowych, biurowych i biznesowych. Interfejs jest kompatybilny z większością obecnie sprzedawanych komputerów oraz płyt głównych. Urządzenie jest więc uniwersalne, może zostać wykorzystane w różnych zastosowaniach. Użyta technologia zapewnia stabilną i sprawną pracę w różnych warunkach, związana między innymi z przenoszeniem plików.↵↵↵Dysk twardy HDD↵Urządzenie zostało wykonane w technologii talerzowej. Jego budowa składa się między innymi z ruchomej głowicy i obracających się talerzy. Dysk może zostać wykorzystany w każdym komputerze – zarówno w konfiguracjach typowo domowych, jak i biznesowych, biurowych, gamingowych czy też specjalistycznych. Dysk HDD sprawdza się także w wielu innych urządzeniach. Pozwala na magazynowanie sporej ilości danych, gwarantuje też stabilną obsługę systemu operacyjnego i zainstalowanych programów oraz narzędzi.↵↵Zwiększ pojemność pamięci masowej swojego systemu Dell za pomocą dysku twardego firmy Dell o pojemności 1TB. Ze względu na prędkość 5.4K obr./min dysk oferuje szybki dostęp do danych. Dzięki interfejsowi SATA dysk zapewnia większą szybkość przesyłania danych.↵↵Należy zwrócić uwagę na następujące ograniczenia: VMware nie obsługuje dysków twardych 512e i 4Kn. Dyski twarde 4Kn są obsługiwane tylko w systemie Win 2012 i podczas rozruchu UEFI, a także w niektórych wersjach systemu Linux. Dyski twarde 512e są obsługiwane tylko w systemie Win2008R2 lub nowszym i w niektórych wersjach systemu Linux.↵↵1TB pojemności pozwala na przechowywanie dużych ilości danych↵Interfejs SATA zapewnia dużą szybkość przesyłania danych↵Prędkość 5.4K obr./min daje znakomitą wydajność"
        ,id: 0,
        imgAdress: "https://images.unsplash.com/photo-1562414962-a6b4f966070d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ,name: "Dysk Dell DELL 1TB 5.4K obr./min SATA 512e 2.5cala",
        price: 235.99,
        seller: "Ja",
        state: "Lekko zepsytu",
        type: "dyski hdd",
    },
    {
        desc: "Śledzenie↵Stacja bazowa 1.0 generuje dokładne śledzenie zewnętrzne. Cięcie, uderzanie i wirowanie z precyzją.↵↵↵↵Krystalicznie czysta grafika.↵Ciesz się najwyższą rozdzielczością wizualną VIVE i zminimalizowanymi efektami mignięc ekranowych. Zobacz światy pełne szczegółów w taki sposób, w jaki powinny być widoczne.↵↵↵Składana konstrukcja.↵Łatwo poruszaj się między rzeczywistością a wirtualną rzeczywistością dzięki flip-up designowi - a wszystko to bez zakłócania podróży VR.↵↵↵↵Precyzyjne ruchy pod każdym kątem.↵Śledzenie SteamVR ™ i zaawansowane kontrolery zapewniają precyzję i swobodę ruchów. Zarzuć rakietę za głowę, krzyżuj miecze - ruchy pod każdym kątem są szybkie i płynne. Stacja bazowa 1.0 zapewnia do 15m 2 * ekscytującego miejsca dla tych, którzy wymagają najlepszych w grach VIVE VR.↵↵ ↵↵Zobacz najdrobniejsze szczegóły w grach VR.↵Zobacz wirtualny świat dzięki rozdzielczości w rozdzielczości 2880 x 1700 pikseli - wzrost o 88% w stosunku do oryginalnej wersji VIVE. Zupełnie nowe panele LCD zmniejszają odległość między pikselami, minimalizując efekt drzwi-ekran.↵↵↵↵Dźwięk, który podnieca.↵Bogaty dźwięk stereo jest zintegrowany z dopasowanymi kształtami słuchawkami nausznymi. Ciesz się doskonałym dźwiękiem podczas rozszerzonych przygód VR.↵↵↵↵Zaprojektowany dla graczy.↵Minimalizuj zakłócenia sesji VR. Swobodnie przełączaj się między rzeczywistością a światem gry dzięki jedynemu w swoim rodzaju składanemu zestawowi słuchawkowemu. Dopasowany krój sprawia, że zakładanie zestawu słuchawkowego jest szybkie i łatwe. Pasuje do szerokiej gamy kształtów twarzy, typów widzenia, a nawet pasuje do okularów. Wykonany z łatwych do czyszczenia materiałów, aby uprościć utrzymanie zestawu słuchawkowego.↵↵ ↵Adapter bezprzewodowy↵Usuń sznurki z równania. Poruszać swobodnie. Uzyskaj potężną transmisję obrazu i dźwięku o częstotliwości 60 GHz. Z technologią Intel © WiGig.↵↵ Specyfikacja zestawu:↵Ekran:↵-Dwa ekrany o przekątnej 3.4 cala↵Rozdzielczość:↵-1440 x 1700 pikseli na oko (2880 x 1700 pikseli łącznie)↵Częstotliwość odświeżania:↵-90 Hz↵Pole widzenia:↵-Maksymalnie 110 stopni↵Audio:↵-Słuchawki stereo↵Wejście audio:↵-Zintegrowane mikrofony↵Połączenia:↵-USB 3.0 (lub nowszy), DP 1.2, własne połączenie do modułów↵Czujniki:↵-Akcelerometr↵-Żyroskop↵-Regulacja rozstawu ekranów (IPD)↵Ergonomia:↵-Konstrukcja Flip-up↵-Regulowany rozstaw ekranów (IPD)↵↵↵Wymagania dotyczące obszaru śledzonego:↵Stojąc/Siedzą:↵-Brak wymagań dotyczących przestrzeni min.↵Skala pomieszczenia:↵*Obszar około 3.5m x 3.5m↵↵↵Minimalna specyfikacja komputera↵Procesor:↵-Intel® Core™ i5-4590 or AMD FX™ 8350 lub lepszy.↵Grafika:↵-NVIDIA® GeForce® GTX 970 4GB, AMD Radeon™ R9 290 4GB lub lepsza karta graficzna VR Ready.↵*Lista kart graficznych VR Ready można znaleźć na stronie internetowej AMD lub NVIDIA VR Ready.↵Pamięci:↵-4 GB RAM lub więcej↵Wyjście wideo:↵-DisplayPort 1.2↵Porty USB:↵-1x USB 3.0 lub nowsze↵System operacyjny:↵-Windows® 10"
        ,id: 1
        ,imgAdress: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ,name: "Gogle VR HTC Cosmos Elite HMD+ Half-Life: Alyx (99HASF008-00)"
        ,price: 2999
        ,seller: "Ja"
        ,state: "Nowy"
        ,type: "google vr"
    },
    {
        desc: "Poznaj Gogle VR HTC Vive Cosmos↵Wirtualna rzeczywistość nigdy nie była tak blisko. Połącz gogle HTC Vive Cosmos ze swoim komputerem i poznaj nowy wymiar multimediów. Sprzęt nie wymaga skomplikowanej instalacji czy konfiguracji. Jest on gotowy do użycia zaraz po wyjęciu z pudełka.↵↵Zestaw VR HTC Vive Cosmos przygotowany został w taki sposób, aby zapewnić maksymalną wygodę rozrywki – przedni panel jest podnoszony, więc nie musisz zdejmować gogli w trakcie przerwy. Zaawansowany system wentylacji sprawia natomiast, że możesz skupić się wyłącznie na czerpaniu przyjemności z oglądania filmów 3D, grania oraz obsługi ogromnego zestawu aplikacji.↵↵↵↵Wysoka rozdzielczość na każdym oku↵Gogle VR HTC Vive Cosmos obsługują rozdzielczość wynoszącą 2880 x 1770 pikseli, co przekłada się na 1440 x 1700 pikseli na każde oko. Wykorzystane wyświetlacze LCD i technologie ograniczające zjawisko screen-door effect przekładają się na wysokiej jakości obraz, który zawsze pozostaje ostry, niezależnie od tego, jakie materiały najbardziej Cię interesują.↵↵To jednak nie wszystko! Za głębokie przeżycia odpowiada również wysoka częstotliwość odświeżania obrazu (90 Hz) oraz zestaw słuchawkowy Hi-Res, dzięki któremu usłyszysz każdy dźwięk i każdy efekt. Wbudowany podwójny mikrofon pozwoli Ci natomiast na komunikację z innymi.↵↵↵↵Liczy się każdy ruch↵Sprzęt został wyposażony w 6 kamer śledzących ruchy użytkownika, dlatego zapewnia ogromną swobodę podczas grania i obsługi aplikacji multimedialnych. Pole widzenia w poziomie wynosi 110 stopni, a żyroskop i akcelerometr gwarantują sprawne działanie w każdej sytuacji.↵↵Do gogli VR HTC Vive Cosmos dołączone zostały zaawansowane kontrolery, które zaprojektowano od nowa, dla jeszcze lepszej funkcjonalności oraz wygody użytkowania. Pozwalają na błyskawiczne reakcje i poczucie głębi rozgrywki.↵↵↵↵Wygoda dla każdego↵Konstrukcja gogli dopasowuje się do każdego kształtu twarzy i wielkości głowy. Sprzęt jest odpowiedni dla wszystkich typów widzenia, także z wykorzystaniem okularów. Dwa ekrany o przekątnej 3,4 cala pozwalają w sposób pełny zanurzyć się w wirtualnym świecie.↵↵Wszystkie elementy cały czas są na swoim miejscu – czujniki, kamery, słuchawki i części podtrzymujące. Miękkie, wygodne poduszki zapewniają wygodę przez wiele godzin, a podnoszony panel przedni umożliwia zrobienie sobie w każdej chwili przerwy, bez konieczności zdejmowania gogli.↵↵↵↵Kompatybilność z wieloma komputerami↵Gogle VR HTC Vive Cosmos zostały wyposażone w złącze USB 3.0 oraz DisplayPort 1.2. Współpracują one z komputerami pracującymi z systemem Windows 10. Dzięki temu, możesz użyć ich do oglądania filmów 3D, ogrywania najnowszych gier komputerowych, a także obsługi niezliczonych aplikacji multimedialnych, przygotowanych w taki sposób, aby wykorzystać pełen potencjał wirtualnej rzeczywistości.↵↵Nieważne, do czego posłużą Ci gogle, zawsze możesz liczyć na wysoką wygodę użytkowania i odpowiednią wytrzymałość mechaniczną. Wszystko za sprawą specjalnie wyselekcjonowanych tworzyw.↵↵↵↵Zawsze gotowe do użycia↵Z gogli możesz skorzystać błyskawicznie. Wystarczy założyć je na głowę, połączyć się z komputerem i czerpać radość z każdej minuty spędzonej w wirtualnym świecie. Gogle VR HTC Vive Cosmos ważą zaledwie 665 gramów, dlatego nie stanowią żadnego obciążenia przez cały czas ich użytkowania.↵↵Specjalnie dobrane tworzywa sztuczne i miękkie poduszki utrzymują sprzęt w stabilnej pozycji, nawet podczas szczególnie dynamicznej rozgrywki. Zaawansowany system wentylacji przedniej jest natomiast gwarancją komfortu w dowolnej sytuacji.↵↵↵↵Platforma Viveport↵Uzupełnieniem oferty jest platforma Viveport, gdzie znajdują się treści przeznaczone do oglądania w goglach HTC Vive oraz innych, działających na platformie Wave. Są to filmy, gry i programy, pozwalające rozwijać zainteresowania, zdobywać wiedzę lub zrelaksować się w czasie wolnym. Wybór jest duży i stale się powiększa. Aktualnie istnieje możliwość skorzystania z oferty Viveport Infinity - pierwszej na świecie usługi z nieograniczonym dostępem do treści VR dostępnych na zasadzie subskrypcji. Koszt usługi to 69zł miesięcznie lub 529zł rocznie a użytkownicy Viveport Infinity zyskają dostęp do pełnej, wciąż rozrastającej się biblioteki Viveport, która już teraz składa się z ponad 900 aplikacji i gier.↵↵Przy zakupie produktu HTC Vive Cosmos otrzymasz 2 miesiące Viveport Infinity w prezencie.↵↵ ↵Minimalne wymagania sprzętowe↵↵Windows 10↵↵Procesor Intel Core i5-4590 3,3 GHz lub AMD FX-8350 4,0 GHz↵↵Pamięć RAM: 4 GB↵↵Karta graficzna GeForce GTX 970 lub Radeon R9 290↵↵USB 3.0↵↵DisplayPort 1.2↵↵Rekomendowane wymagania sprzętowe↵↵Pamięć RAM: 8 GB lub więcej↵↵Karta graficzna GeForce GTX 1060 lub Radeon RX 480↵↵Karta graficzna GeForce GTX 1070 / Quadro 5000 lub nowsza↵↵Karta graficzna AMD Radeon Vega 56 lub nowsza"
        ,id: 2
        ,imgAdress: "https://images.unsplash.com/photo-1554474054-1258273559a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ,name: "Gogle VR HTC Vive Cosmos (99HARL002-00)"
        ,price: 3689
        ,seller: "Ja"
        ,state: "Nowy"
        ,type: "google vr"
    },
    {
        desc: "Z przewodowym kontrolerem Xbox dla systemu Windows jeszcze bardziej zaangażujesz się w grę. Zyskaj większą wygodę podczas gry dzięki kontrolerowi Xbox o bardziej opływowym kształcie i chropowatej teksturze uchwytów. Podłącz kontroler do komputera za pomocą kabla USB i korzystaj z doprowadzenia zasilania,niewymagającego baterii. Kontroler Xbox z przewodem dla systemu Windows może być używany przewodowo lub bezprzewodowo z konsolą Xbox One.↵↵ ↵↵Poczuj grę dzięki spustom impulsowym↵3,5-mm wejście stereo↵Większa wygoda i lepsza kontrola↵Uchwyty pokryte fakturą↵Płynne łączenie profili i kontrolerów↵Obsługa Bluetooth w grach na komputerach i tabletach z systemem Windows↵Ulepszone drążki i pad kierunkowy gwarantują większą precyzję↵Szybki i łatwy dostęp do spustów i przycisków przednich↵Przyciski Menu i View ułatwiające nawigację"
        ,id: 3
        ,imgAdress: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ,name: "Gamepad Microsoft Kontroler do Xbox One (4N6-00002)"
        ,price: 224.59
        ,seller: "Ja"
        ,state: "Nowy"
        ,type: "konsole i pady"
    },
    {
        desc: "Nowy sposób gry↵Nasze najlepsze dzieło↵ ↵Poznaj główne funkcje kontrolera bezprzewodowego DUALSHOCK 4.↵↵ ↵Przycisk SHARE↵ ↵↵Uchwyć i pokaż światu swoje najlepsze chwile za dotknięciem jednego przycisku. Przesyłaj klipy i zrzuty ekranu z gier bezpośrednio z systemu PS4 lub transmituj rozgrywkę na żywo, nie przerywając gry.↵↵ ↵Panel dotykowy↵ ↵↵Jeszcze bardziej precyzyjna kontrola dzięki zintegrowanemu panelowi dotykowemu, który pozwala zobaczyć pasek świetlny i dodaje nowego wymiaru grom.↵↵ ↵↵ ↵Udoskonalone drążki analogowe i spusty↵Zdobądź przewagę, mając znacznie większe poczucie kontroli nad działaniami w grze.↵↵↵ ↵Pasek świetlny↵Zintegrowany pasek świetlny, który świeci w różnych kolorach w zależności od tego, co dzieje się w grze – teraz widać go na panelu dotykowym.↵↵↵ ↵Wbudowany głośnik↵Ożyw swoje gry i usłysz każdy szczegół dzięki efektom dźwiękowym pochodzącym bezpośrednio z kontrolera bezprzewodowego DUALSHOCK 4.↵↵ ↵ ↵ ↵↵ ↵Stereofoniczne gniazdo słuchawkowe↵Słuchaj gier przez słuchawki — zintegrowane gniazdo słuchawkowe 3,5 mm pozwoli Ci usłyszeć każdy huk, trzask oraz wybuch.↵↵↵ ↵Czujniki ruchu↵Kołysz się i ruszaj, a wbudowany niezwykle czuły akcelerometr z żyroskopem wykryje ruch, przechylanie i rotację kontrolera bezprzewodowego DUALSHOCK 4.↵↵↵ ↵Łączność USB↵Naładuj kontroler z dowolnego portu USB i przekazuj dane za pośrednictwem kabla USB.↵↵ ↵ ↵ "
        ,id: 4
        ,imgAdress: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ,name: "Gamepad Sony DualShock 4 V2 (9893950)"
        ,price: 249
        ,seller: "Ja"
        ,state: "Nowy"
        ,type: "konsole i pady"
    }
]

export const products = (state:Array<Iproducts> = [], action:any) => {
    switch(action.type){
        case "LOAD_PRODUCTS_FROM_LOCALSTORAGE":
            console.log('loading products')
            if(localStorage.getItem('products')!=null){
                state = JSON.parse(localStorage.getItem('products'))
            } else {
                localStorage.setItem("products", JSON.stringify(exampleProducts))
                state = JSON.parse(localStorage.getItem('products'))
            }
            return state
        case "ADD_NEW_PRODUCT":
            state = [...state, action.payload]
            state.map((o, i) => {
                return o.id = i
            })
            localStorage.setItem("products", JSON.stringify(state))
            console.log("ZXDDDDDDDDDDDDDDDDD: ", state)
            return state
        case "DELETE_PRODUCT":
            console.log('deleting', state)
            state.map((o, i) => {
                return o.id = i
            })
            console.log('przefiltrowqano przed susnieciem')
            state = _.remove(state, (i) => {
                return i.id !== action.id
            })
            state.map((o, i) => {
                return o.id = i
            })
            console.log(action.id)
            console.log(action.id)
            console.log(action.id)
            localStorage.setItem("products", JSON.stringify(state))
            return state
        case "EDIT_PRODUCT":
            state[action.index] = action.payload
            localStorage.setItem("products", JSON.stringify(state))
            return state
        default:
            return state
    }
}