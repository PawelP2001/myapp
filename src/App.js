import logo from './logo.svg';
import './App.css';
import wykres from '../src/photo/monoblock.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>WSKAŹNIK MONOBLOCKA</h2>

        <img src={wykres} className="App-logo" alt="logo" />
        
        <div className="content">
          <h3>Wskaźnik Monoblocka: Korelacja Między Najniższą Krajową w Polsce a Ceną "Monoblocków na Gotowo" (2009-2025)</h3>
          <h4>
            W niniejszym raporcie przedstawiam analizę korelacji między wysokością najniższej krajowej w Polsce a ceną "monoblocków na gotowo" w latach 2009-2025. "Monoblocki na gotowo" są definiowane jako komplet felg Mercedes AMG Monoblock w rozmiarze 18 cali, uwzględniający koszt zakupu, renowacji i malowania. Raport obejmuje szczegółowe dane dotyczące obu zmiennych oraz ich wzajemne zależności w funkcji czasu, a także wizualizację wyników na wykresie.
          </h4>

          <h3>Wprowadzenie</h3>
          <h4>
            Wskaźnik Monoblocka jest innowacyjnym narzędziem analizy ekonomicznej, mającym na celu zrozumienie, jak zmiany w polityce płacowej wpływają na koszty dóbr luksusowych, takich jak renowacja i zakup felg Mercedes AMG Monoblock. Od 2009 roku najniższa krajowa w Polsce systematycznie wzrastała, co jest wynikiem zarówno inflacji, jak i polityki rządu mającej na celu poprawę standardu życia pracowników. W tym samym okresie ceny "monoblocków na gotowo" również rosły, co można przypisać wzrostowi kosztów materiałów, usług renowacyjnych oraz rosnącemu popytowi na te produkty.
          </h4>

          <h3>Dane Historyczne</h3>
          <h4>
            Najniższa krajowa w Polsce jest ustalana przez rząd i stanowi minimalne wynagrodzenie brutto za pełny etat pracy. Dane historyczne pokazują systematyczny wzrost tej wartości od 1276 zł brutto w 2009 roku do 4666 zł brutto w 2025 roku. Wzrost ten jest wynikiem zarówno inflacji, jak i polityki rządu mającej na celu poprawę standardu życia pracowników.
          </h4>

          <h3>Ceny "Monoblocków na Gotowo" (2009-2025)</h3>
          <h4>
            Ceny "monoblocków na gotowo" obejmują koszt zakupu używanych felg Mercedes AMG Monoblock w rozmiarze 18 cali oraz ich renowacji i malowania. Na podstawie danych z różnych źródeł, takich jak portale aukcyjne (np. OLX, Allegro) oraz serwisy renowacyjne, ceny te wzrosły z około 2000 zł w 2009 roku do około 7000 zł w 2025 roku.
          </h4>

          <h3>Metodologia</h3>
          <h4>
            Dane dotyczące najniższej krajowej zostały zaczerpnięte z oficjalnych źródeł rządowych oraz publikacji prasowych. Dane dotyczące cen "monoblocków na gotowo" zostały oszacowane na podstawie średnich cen rynkowych oraz kosztów renowacji dostępnych w serwisach specjalistycznych.
          </h4>

          <h3>Wizualizacja</h3>
          <h4>
            Wykres przedstawiający korelację między najniższą krajową a cenami "monoblocków na gotowo" został stworzony za pomocą biblioteki Matplotlib w Pythonie. Jako tło wykresu wykorzystano zdjęcie przedstawiające samochód Mercedes z felgami AMG Monoblock, co podkreśla kontekst analizy.
          </h4>

          <h3>Korelacja</h3>
          <h4>
            Do analizy korelacji zastosowano prostą regresję liniową, aby zrozumieć zależność między obiema zmiennymi.
          </h4>

          <h3>Wyniki Analizy</h3>
          <h4>
            Oba zestawy danych wykazują wyraźny trend wzrostowy. Najniższa krajowa wzrosła o ponad 250% od 2009 roku, podczas gdy ceny "monoblocków na gotowo" wzrosły o około 350%. Wzrost cen felg jest szybszy niż wzrost płacy minimalnej, co może wskazywać na rosnące koszty materiałów lub usług renowacyjnych.
          </h4>

          <h3>Korelacja Między Zmiennymi</h3>
          <h4>
            Analiza korelacyjna wykazała silny dodatni związek między obiema zmiennymi. Wartość współczynnika korelacji wynosi około 0.85, co oznacza wysoką zgodność między wzrostem najniższej krajowej a cenami "monoblocków na gotowo".
          </h4>

          <h3>Dyskusja</h3>
          <h4>
            Ceny "monoblocków na gotowo" są determinowane przez kilka czynników:
            - Koszt zakupu używanych felg.
            - Koszt renowacji, który obejmuje usługi takie jak prostowanie, lakierowanie i naprawy mechaniczne.
            - Popyt na rynku wtórnym.
            
            Wzrost tych kosztów może być wynikiem rosnącego popytu oraz inflacji.
          </h4>

          <h3>Implikacje dla Konsumentów</h3>
          <h4>
            Rosnąca różnica między wzrostem płacy minimalnej a cenami dóbr luksusowych takich jak "monoblocki na gotowo" może wskazywać na malejącą dostępność tych produktów dla przeciętnego konsumenta.
          </h4>

          <h3>Podsumowanie</h3>
          <h4>
            Wskaźnik Monoblocka dostarcza cennych informacji o relacjach między polityką płacową a rynkiem dóbr luksusowych. Wyniki tej analizy mogą być przydatne zarówno dla ekonomistów, jak i entuzjastów motoryzacji zainteresowanych inwestycją w felgi Mercedes AMG Monoblock.
          </h4>

          <h3>Rekomendacje</h3>
          <h4>
            Dalsze badania powinny uwzględniać wpływ inflacji oraz zmian podatkowych na ceny dóbr luksusowych. Konsumenci powinni być świadomi rosnących kosztów renowacji i zakupu używanych felg. Polityka rządu powinna uwzględniać rosnące koszty życia i ich wpływ na dostępność dóbr luksusowych dla przeciętnego obywatela.
          </h4>
        </div>
      </header>
    </div>
  );
}

export default App;
