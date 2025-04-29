let nowy_uk_bl=
"<section id='blok_l'><article id='obrazek'></article></section><section id='blok_p'><p id='tekst'></p></section>";
let tablica=['Wykonaj 10 pompek','Wykonaj 25 przysiadów','Wykonaj 15 pompek','Wykonaj 35 przysiadów','Zadzwoń pogadać do kolegi','Wyjdź z psem na dwór','Wyjdź ze znajomymi na dwór','Połóż się spać odrobinkę wcześniej','Nie oglądaj dzisiaj TikToka','Nie oglądaj dzisiaj telewizji','Ogranicz użytkowanie telefonu do maksymalnie 1 godziny','Ogranicz użytkowanie komputera do maksymalnie 2 godzin','Daj całusa jednemu ze swoich najbliższych','Skomplementuj kogoś','Spróbuj wykonać planka przez co najmniej 2 minuty','Wykonaj porządki w domu','Przeczytaj wiadomości ze świata','Wykonaj 28 pompek','Wykonaj 40 przysiadów','Nie graj w żadną grę Video przez cały dzień'];
let stop_s=1;
let wyk_zad="";
let Wszystko="";
let Poprz_Wyzwania="";
function funkcja1() {
    if (stop_s>1) alert("Wylosowałeś już dzisiaj zadanie!");
    else {
        document.getElementById("sekcja_pod").style.height="90px";
        document.getElementById("guzior2").style.marginTop="25px";
        document.getElementById("guzior3").style.marginTop="25px";
        document.getElementById("blok_gl").innerHTML=nowy_uk_bl;
        let los=Math.ceil(Math.random()*20);
        stop_s++;
        if (los==1) {
            document.getElementById("tekst").innerHTML=tablica[0];
            document.getElementById("obrazek").innerHTML="<img src='Pompki.png' alt='Mężczyzna robiący pompki'>";
        }
        if (los==2) {
            document.getElementById("tekst").innerHTML=tablica[1];
            document.getElementById("obrazek").innerHTML="<img src='Przysiady.png' alt='Kobieta robiący przysiady'>";
        }
        if (los==3) {
            document.getElementById("tekst").innerHTML=tablica[2];
            document.getElementById("obrazek").innerHTML="<img src='Pompki.png' alt='Mężczyzna robiący pompki'>";
        }
        if (los==4) {
            document.getElementById("tekst").innerHTML=tablica[3];
            document.getElementById("obrazek").innerHTML="<img src='Przysiady.png' alt='Kobieta robiący przysiady'>";
        }
        if (los==5) {
            document.getElementById("tekst").innerHTML=tablica[4];
            document.getElementById("obrazek").innerHTML="<img src='Rozmowa.png' alt='Kobieta rozmawiająca przez telefon'>";
        }
        if (los==6) {
            document.getElementById("tekst").innerHTML=tablica[5];
            document.getElementById("obrazek").innerHTML="<img src='WyjscieZPsem.png' alt='Człowiek wyprowadzający psy'>";
        }
        if (los==7) {
            document.getElementById("tekst").innerHTML=tablica[6];
            document.getElementById("obrazek").innerHTML="<img src='WyjscieZeZnaj.png' alt='Grupka przyjaciół spędzająca razem czas'>";
        }
        if (los==8) {
            document.getElementById("tekst").innerHTML=tablica[7];
            document.getElementById("obrazek").innerHTML="<img src='Spanie.png' alt='Mężczyzna leżący na łóżku'>";
        }
        if (los==9) {
            document.getElementById("tekst").innerHTML=tablica[8];
            document.getElementById("obrazek").innerHTML="<img src='TikTok.png' alt='Telefon z włączoną aplikacją TikTok'>";
        }
        if (los==10) {
            document.getElementById("tekst").innerHTML=tablica[9];
            document.getElementById("obrazek").innerHTML="<img src='TV.png' alt='Telewizor'>";
        }
        if (los==11) {
            document.getElementById("tekst").innerHTML=tablica[10];
            document.getElementById("obrazek").innerHTML="<img src='Limit.png' alt='Zegar'>";
        }
        if (los==12) {
            document.getElementById("tekst").innerHTML=tablica[11];
            document.getElementById("obrazek").innerHTML="<img src='Limit.png' alt='Zegar'>";
        }
        if (los==13) {
            document.getElementById("tekst").innerHTML=tablica[12];
            document.getElementById("obrazek").innerHTML="<img src='Całus.png' alt='Mężczyzna całujący dziecko'>";
        }
        if (los==14) {
            document.getElementById("tekst").innerHTML=tablica[13];
            document.getElementById("obrazek").innerHTML="<img src='Komplement.png' alt='Kciuk uniesiony ku górze'>";
        }
        if (los==15) {
            document.getElementById("tekst").innerHTML=tablica[14];
            document.getElementById("obrazek").innerHTML="<img src='Plank.png' alt='Mężczyzna wykonujący ćwiczenie plank'>";
        }
        if (los==16) {
            document.getElementById("tekst").innerHTML=tablica[15];
            document.getElementById("obrazek").innerHTML="<img src='Porządki.png' alt='Człowiek wyposażony w środki czystości'>";
        }
        if (los==17) {
            document.getElementById("tekst").innerHTML=tablica[16];
            document.getElementById("obrazek").innerHTML="<img src='Wiadomości.png' alt='Zdjęcie kanału informacyjnego'>";
        }
        if (los==18) {
            document.getElementById("tekst").innerHTML=tablica[17];
            document.getElementById("obrazek").innerHTML="<img src='Pompki.png' alt='Mężczyzna robiący pompki'>";
        }
        if (los==19) {
            document.getElementById("tekst").innerHTML=tablica[18];
            document.getElementById("obrazek").innerHTML="<img src='Przysiady.png' alt='Kobieta robiący przysiady'>";
        }
        if (los==20) {
            document.getElementById("tekst").innerHTML=tablica[19];
            document.getElementById("obrazek").innerHTML="<img src='Kara.png' alt='Zdjęcie zablokowanego komputera'>";
        }
        document.getElementById("guzior2").style.visibility="visible";
        document.getElementById("guzior3").style.marginLeft="0px";
        wyk_zad=tablica[los-1];
    }
}
function funkcja2() {
    alert("Gratulacje! Wyzwanie wykonane 🎉\n\n"+wyk_zad+" ✅");
    document.getElementById("tekst").style.textDecoration="underline";
    document.getElementById("tekst").style.textDecorationColor="green";
    localStorage.setItem("Wyzwania_Zrobione", wyk_zad);
}
function funkcja3() {
    if (wyk_zad=="") alert(Poprz_Wyzwania);
    else {
    Wszystko = Poprz_Wyzwania+"\n"+wyk_zad;
    alert(Wszystko);
    localStorage.setItem("Wyzwania_Zrobione", Wszystko);
    }
}
onload=function() {
    let czas=this.localStorage.getItem("Aktualny_Czas");
    let data=new Date();
    let AktualnyCzas=data.getDate();
    localStorage.setItem("Aktualny_Czas", AktualnyCzas);
    if(czas==AktualnyCzas) {
        Poprz_Wyzwania=localStorage.getItem("Wyzwania_Zrobione");
    }
    else {
    localStorage.removeItem("Wyzwania_Zrobione");
    this.localStorage.clear();
    localStorage.setItem("Aktualny_Czas", AktualnyCzas);
    }
}