/**
 * Language database for the Space Spelling game.
 * Restructured with levelWords arrays mapped directly to Level 1 - 7.
 * Level number corresponds directly to the number of characters in the target words.
 */
const LANGUAGE_DATA = {
  ru: {
    name: "Русский",
    nativeName: "Русский",
    keyboardLayout: [
      ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
      ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
      ["Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "Ё"]
    ],
    // levelWords[0] corresponds to Level 1, [6] to Level 7
    levelWords: [
      // Level 1: 1 letter (Individual Alphabet Letters)
      [
        "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", 
        "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", 
        "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", 
        "Э", "Ю", "Я"
      ],
      // Level 2: 2 letters (Phonetic Syllables)
      [
        "МА", "ПА", "БА", "ДА", "НО", "КО", "МИ", "ТУ", "ЛИ", "РА",
        "СИ", "ЗА", "ДО", "РУ", "ВА", "МУ", "ТА", "КИ", "ПО", "ЛУ",
        "СА", "ХО", "ЖУ", "ЧА", "ШУ", "ЗУ", "РЫ", "ДЫ", "ПЕ", "ГО"
      ],
      // Level 3: 3 letters (Words)
      [
        "КОТ", "ДОМ", "ЛЕС", "СОК", "МЯЧ", "КИТ", "РОТ", "НОС", "ЖУК", 
        "СЫР", "ЧАЙ", "МЕД", "ДУБ", "ШАР", "МАК", "ЛАК", "МИР", "БОК", 
        "ЗУБ", "ДЫМ", "РАК", "ЛУК", "ТАЗ", "УХО", "ФЕН"
      ],
      // Level 4: 4 letters (Words)
      [
        "РЫБА", "ПАПА", "МАМА", "НЕБО", "ЛУНА", "КАША", "МЫЛО", "СОВА", 
        "ЛИСА", "ВОЛК", "СНЕГ", "РОЗА", "ГРИБ", "ГОРЫ", "УТКА", "ГУСЬ", 
        "ДЕТИ", "РЕКА", "ЗУБЫ", "МОРЕ", "КЛЕЙ", "ЗИМА", "ЛЕТО", "ХЛЕБ"
      ],
      // Level 5: 5 letters (Words)
      [
        "ЛИМОН", "ПЕТУХ", "КНИГА", "ШКОЛА", "ПЕНАЛ", "ВЕТЕР", "ГРОЗА", 
        "ТУЧКА", "ТРАВА", "ЛОДКА", "ГРУША", "КАРТА", "ПИРОГ", "ГОРОД", 
        "ДВЕРЬ", "ТЕПЛО", "ДОЖДЬ", "ЗЕМЛЯ", "РУЧКА", "ПЕСОК", "АРБУЗ"
      ],
      // Level 6: 6 letters (Words)
      [
        "СОЛНЦЕ", "МОЛОКО", "СОБАКА", "КОРОВА", "БЕРЕЗА", "ЯБЛОКО", 
        "РАКЕТА", "МАШИНА", "ЦВЕТОК", "ОБЛАКО", "КАРТОН", "ПИСЬМО", 
        "ГИТАРА", "ГНЕЗДО", "ЖЕЛУДЬ", "ПОГОДА", "КОСМОС"
      ],
      // Level 7: 7 letters (Words)
      [
        "БАБОЧКА", "ИГРУШКА", "КОРАБЛЬ", "ПЛАНЕТА", "ТЕЛЕФОН", "САМОЛЕТ", 
        "МАЛИНА", "МЕДВЕДЬ", "КАПУСТА", "РИСУНОК", "КОМНАТА", "ТАРЕЛКА", 
        "БУКВАРЬ", "УЧИТЕЛЬ", "ПОДАРОК", "ДЕВОЧКА", "МАЛЬЧИК", "ЧАЙНИК"
      ]
    ]
  },
  en: {
    name: "English",
    nativeName: "English",
    keyboardLayout: [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"]
    ],
    levelWords: [
      // Level 1: 1 letter
      [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"
      ],
      // Level 2: 2 letters
      [
        "BA", "MA", "PA", "CO", "DO", "LI", "RE", "TO", "BO", "MU",
        "FA", "SA", "ME", "HE", "GO", "NO", "SI", "LA", "TI", "FI",
        "HI", "BY", "WE", "AN", "AT", "IN", "ON", "UP", "AM", "MY"
      ],
      // Level 3: 3 letters
      [
        "CAT", "DOG", "SUN", "TOY", "RED", "FOX", "PIG", "BUS", "BOX", 
        "BAG", "CAP", "BOY", "CUP", "KEY", "CAR", "HAT", "EGG", "FLY", 
        "ICE", "BEE", "OWL", "PEN", "WEB", "MAP", "BED"
      ],
      // Level 4: 4 letters
      [
        "FISH", "FROG", "TREE", "BIRD", "MILK", "STAR", "BOOK", "LION", 
        "DUCK", "SHIP", "BOAT", "WIND", "SNOW", "ROSE", "FIRE", "SOUP", 
        "CAKE", "DEER", "BEAR", "MOON", "BALL", "PINE", "DRUM", "TENT"
      ],
      // Level 5: 5 letters
      [
        "HOUSE", "MOUSE", "CHAIR", "TABLE", "CLOCK", "APPLE", "LEMON", 
        "HORSE", "SHEEP", "GRASS", "BREAD", "WATER", "TRAIN", "SHARK", 
        "CLOUD", "SQUID", "PIANO", "KOALA", "EAGLE", "SNAKE"
      ],
      // Level 6: 6 letters
      [
        "BANANA", "MONKEY", "RABBIT", "ORANGE", "FLOWER", "KITTEN", 
        "TURTLE", "PENCIL", "ROCKET", "SPIDER", "HELMET", "CASTLE", 
        "BRIDGE", "GUITAR", "CHEESE", "CAMERA", "DONKEY", "DRAGON"
      ],
      // Level 7: 7 letters
      [
        "BALLOON", "GIRAFFE", "CHICKEN", "RAINBOW", "OCTOPUS", "DOLPHIN", 
        "PENGUIN", "MONSTER", "LANTERN", "PILLOWS", "BLANKET", "BICYCLE", 
        "AIRPORT", "SOLDIER", "FEATHER", "GORILLA", "VOLCANO", "PYRAMID"
      ]
    ]
  },
  es: {
    name: "Spanish",
    nativeName: "Español",
    keyboardLayout: [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
      ["Z", "X", "C", "V", "B", "N", "M"]
    ],
    levelWords: [
      // Level 1: 1 letter
      [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S",
        "T", "U", "V", "W", "X", "Y", "Z"
      ],
      // Level 2: 2 letters
      [
        "MA", "PA", "BA", "LA", "SO", "TE", "ME", "LU", "PE", "CA",
        "DE", "NO", "SI", "VO", "GA", "RI", "TO", "FA", "CO", "RU",
        "LE", "MI", "SA", "PI", "DA", "HO", "JA", "VE", "EL", "YA"
      ],
      // Level 3: 3 letters
      [
        "SOL", "PEZ", "PAN", "MAR", "UVA", "OJO", "PAZ", "VÍA", "RÍO", 
        "LUZ", "GOL", "OSO", "DOS", "MIL", "BUS", "TÍA", "FEO", "GAS", 
        "DÍA", "SAL"
      ],
      // Level 4: 4 letters
      [
        "GATO", "MESA", "CASA", "LUNA", "BOLA", "RANA", "ROSA", "NIÑO", 
        "PIÑA", "PATO", "MAPA", "BOTA", "LOBO", "CAMA", "MANO", "NUBE", 
        "TREN", "PELO", "LEÓN", "CAFE", "SAPO", "VACA", "TORO", "COPA"
      ],
      // Level 5: 5 letters
      [
        "PERRO", "COCHE", "FRUTA", "LIBRO", "FUEGO", "HOJAS", "LIMÓN", 
        "TIERRA", "GLOBO", "PLATA", "BARCO", "QUESO", "OVEJA", "LLAVE", 
        "LECHE", "RATÓN", "PANDA", "TIGRE", "LEONA", "POLLO"
      ],
      // Level 6: 6 letters
      [
        "TOMATE", "PELOTA", "ZAPATO", "PUERTA", "MONEDA", "DIENTE", 
        "PUENTE", "CAMINO", "BANANA", "PÁJARO", "CONEJO", "ABUELO", 
        "COMIDA", "ESCAPE", "RATITA", "COLINA", "PIRATA", "ESCUDO"
      ],
      // Level 7: 7 letters
      [
        "CABALLO", "PLANETA", "PESCADO", "JUGUETE", "PINTURA", "CASTILLO", 
        "TORTUGA", "BALLENA", "MOCHILA", "VENTANA", "HELADO", "RAQUETA", 
        "TECLADO", "COLEGIO", "NARANJA", "PLÁTANO", "ABANICO", "DORMIDO"
      ]
    ]
  },
  de: {
    name: "German",
    nativeName: "Deutsch",
    keyboardLayout: [
      ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ü"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
      ["Y", "X", "C", "V", "B", "N", "M", "ß"]
    ],
    levelWords: [
      // Level 1: 1 letter
      [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü", "ß"
      ],
      // Level 2: 2 letters
      [
        "BA", "MA", "PA", "DO", "NE", "LA", "SE", "MI", "RU", "TE",
        "FO", "GO", "LO", "DE", "KO", "ZU", "HA", "GE", "EI", "AU",
        "EU", "RE", "BI", "FA", "KA", "LI", "SA", "WI", "ZU", "AN"
      ],
      // Level 3: 3 letters
      [
        "ROT", "ZUG", "OHR", "AST", "HUT", "WEG", "EIS", "SEE", "UHR", 
        "BÄR", "KUH", "TEE", "ELF", "NEU", "MAI", "WAL", "GUT", "TON", 
        "ALT", "RAD"
      ],
      // Level 4: 4 letters
      [
        "HAUS", "HUND", "MAUS", "BAUM", "PILZ", "BALL", "BOOT", "KIND", 
        "KATZ", "BUCH", "AUTO", "WURM", "GELB", "BLAU", "KUSS", "ZAHN", 
        "SAFT", "HOSE", "WIND", "BERG", "HEFT", "LAND", "GRAS", "KOPF"
      ],
      // Level 5: 5 letters
      [
        "APFEL", "FISCH", "VOGEL", "SPIEL", "MILCH", "STIFT", "SCHAF", 
        "SONNE", "STERN", "BLUME", "TISCH", "STUHL", "CLOWN", "STEIN", 
        "FEUER", "REGEN", "KRAFT", "PIZZA"
      ],
      // Level 6: 6 letters
      [
        "WASSER", "GARTEN", "BRÜCKE", "SCHIFF", "WURST", "BANANE", 
        "BRILLE", "FENSTER", "PAPIER", "SCHULE", "HERBST", "WINTER", 
        "SOMMER", "STRAND", "KIRSCH", "WOLKEN", "KATZEN", "BÜCHER"
      ],
      // Level 7: 7 letters
      [
        "FLASCHE", "LATERNE", "FAHRRAD", "PINGUIN", "GIRAFFE", "ELEFANT", 
        "ZWIEBEL", "TRAKTOR", "BAHNHOF", "SPRACHE", "GESICHT", "TROMMEL", 
        "ZITRONE", "SCHRANK", "PFLANZE", "FREUNDE"
      ]
    ]
  },
  fr: {
    name: "French",
    nativeName: "Français",
    keyboardLayout: [
      ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
      ["W", "X", "C", "V", "B", "N", "É", "È", "À", "Ç"]
    ],
    levelWords: [
      // Level 1: 1 letter
      [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z", "É", "È", "À", "Ç"
      ],
      // Level 2: 2 letters
      [
        "MA", "PA", "BA", "LI", "DE", "RE", "TO", "VO", "SA", "TE",
        "NE", "CO", "BO", "LE", "LA", "OU", "CH", "IN", "AN", "ON",
        "RI", "FI", "PI", "DO", "GA", "LU", "MI", "SU", "VI", "ZE"
      ],
      // Level 3: 3 letters
      [
        "FEU", "EAU", "SAC", "NID", "NEZ", "VOL", "POT", "RAT", "MER", 
        "COQ", "BAL", "FER", "JUS", "BAS", "RIZ", "CIL", "AIR", "BON", 
        "LAC", "BEL"
      ],
      // Level 4: 4 letters
      [
        "CHAT", "LUNE", "PAIN", "LAIT", "BEBE", "ROSE", "LION", "CAFE", 
        "TAXI", "VELO", "ROBE", "PONT", "PARC", "OURS", "FORT", "VERT", 
        "BLEU", "GRIS", "MAIN", "PIED", "CLOU", "CAGE", "DENT"
      ],
      // Level 5: 5 letters
      [
        "CHIEN", "TABLE", "LIVRE", "POMME", "SINGE", "ARBRE", "FLEUR", 
        "CLOWN", "JOUET", "PANDA", "PLAGE", "TERRE", "FORÊT", "LAPIN", 
        "PORTE", "COEUR", "TIGRE", "ZEBRE", "HIBOU"
      ],
      // Level 6: 6 letters
      [
        "SOURIS", "BANANE", "OISEAU", "CHEVAL", "SOLEIL", "BALLON", 
        "CRAYON", "BATEAU", "GIRAFE", "JARDIN", "MAISON", "PAPIER", 
        "BOUGIE", "CANARD", "FRAISE", "SINGES", "ARBRES", "FLEURS"
      ],
      // Level 7: 7 letters
      [
        "GUITARE", "FENÊTRE", "VOITURE", "CHÂTEAU", "PINGOUIN", "DAUPHIN", 
        "POMPIER", "ARMOIRE", "POISSON", "GIRAFFE", "BALLONS", "DESSINS", 
        "PAPIERS", "RIVIERE", "ANIMAUX"
      ]
    ]
  },
  it: {
    name: "Italian",
    nativeName: "Italiano",
    keyboardLayout: [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ò"],
      ["Z", "X", "C", "V", "B", "N", "M", "À", "È", "Ì", "Ù"]
    ],
    levelWords: [
      // Level 1: 1 letter
      [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z", "À", "È", "Ì", "Ò", "Ù"
      ],
      // Level 2: 2 letters
      [
        "MA", "PA", "BA", "LA", "RE", "TO", "MI", "SO", "TE", "NE",
        "CA", "LI", "CO", "DA", "RO", "PI", "FA", "SA", "DE", "BO",
        "FI", "CI", "GI", "LU", "MU", "VI", "SI", "GA", "RI", "ZO"
      ],
      // Level 3: 3 letters
      [
        "UVA", "ZOO", "BLU", "TRE", "EST", "SUB", "SCI", "VIA", "OLI", 
        "FIL", "REA", "BUS", "GRU", "PIO", "BUE", "ZIO", "ORA", "GAS", 
        "EST", "TÈ"
      ],
      // Level 4: 4 letters
      [
        "SOLE", "CANE", "CASA", "MARE", "LUNA", "PANE", "MELA", "ROSA", 
        "LUPO", "NIDO", "MANO", "BICI", "FICO", "PERA", "RAMO", "FUMO", 
        "ORSO", "VINO", "NAVE", "LAGO", "VASO", "PINO", "GOLF", "TOPO"
      ],
      // Level 5: 5 letters
      [
        "GATTO", "PALLA", "PESCE", "FIORE", "COLLO", "BOCCA", "LEONE", 
        "ACQUA", "LIBRO", "TRENO", "PRATO", "BARCA", "PORTA", "MONTE", 
        "CORPO", "PIEDE", "TASSO", "VOLPE", "DENTE", "GIOCO"
      ],
      // Level 6: 6 letters
      [
        "SCUOLA", "BANANA", "TAVOLO", "MATITA", "LIMONE", "CAVALLO", 
        "BRUCO", "STRADA", "PIATTO", "ALBERO", "FOGLIA", "SCARPA", 
        "GIACCA", "FRUTTA", "GIORNO", "STELLA", "FLUIDO", "CHIAVE"
      ],
      // Level 7: 7 letters
      [
        "GALLINA", "DELFINO", "DISEGNO", "ARANCIA", "CANDELA", "BAMBINO", 
        "CAMICIA", "FORBICI", "LETTERA", "PIANETA", "VESTITO", "GIRAFA", 
        "PULCINO", "SOLDATO", "UCCELLO"
      ]
    ]
  }
};

// Export for ES modules and standard script inclusion compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = { LANGUAGE_DATA };
}
