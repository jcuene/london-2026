// data.js — Edit this file to update your itinerary.
// The app reads everything from here. No other file needs to change.
//
// Event types: "transit" | "hotel" | "show" | "museum" | "food" | "walk" | "concert" | "tour" | "market" | "open"
// Set warning: true on any event flagged ⚠️ in your notes.

function mapsUrl(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

const TRIP = {
  title: "London 2026",
  dates: "May 2–9, 2026",

  homeBase: {
    name: "16 Marloes Road — First Floor Flat",
    address: "16 Marloes Road, Kensington, London W8 5LH",
    mapsUrl: mapsUrl("16 Marloes Road London W8 5LH"),
    tube: "High Street Kensington (District & Circle lines)",
    notes: "Sainsbury's is a 5-min walk."
  },

  days: [
    // ─────────────────────────────────────────
    // DAY 1 — Saturday, May 2 · Arrival
    // ─────────────────────────────────────────
    {
      date: "2026-05-02",
      label: "Saturday, May 2",
      subtitle: "Arrival Day",
      events: [
        {
          time: "1:00 PM",
          name: "Arrive at Heathrow",
          type: "transit",
          notes: "Collect bags, clear immigration.",
          tube: "Piccadilly line → Earl's Court → District line → High Street Kensington. ~50 min, no changes needed on Piccadilly."
        },
        {
          time: "3:00 PM",
          name: "Check In",
          type: "hotel",
          address: "16 Marloes Road, Kensington, London W8 5LH",
          mapsUrl: mapsUrl("16 Marloes Road London W8 5LH"),
          notes: "Sainsbury's grocery is a 5-min walk."
        },
        {
          time: "7:30 PM",
          name: "Shakespeare's Globe",
          subtitle: "A Midsummer Night's Dream",
          type: "show",
          address: "21 New Globe Walk, London SE1 9DT",
          mapsUrl: mapsUrl("21 New Globe Walk London SE1 9DT"),
          tube: "High Street Kensington → London Bridge (District → Jubilee, or District → Waterloo then walk). ~35 min.",
          admission: "From £7 (standing)",
          notes: "Open-air theatre — bring a layer. Running Apr 23–Aug 29, 2026.",
          website: "shakespearesglobe.com"
        }
      ],
      pubs: [
        {
          name: "The Harp",
          note: "CAMRA Pub of the Year. Rotating real ale. 10 min walk from the Globe via Waterloo Bridge. Perfect pre-show pint.",
          address: "47 Chandos Place, London WC2N 4HS",
          mapsUrl: mapsUrl("47 Chandos Place London WC2N 4HS")
        },
        {
          name: "The George Inn",
          note: "Only surviving galleried coaching inn in London. National Trust-preserved. 5 min walk from the Globe.",
          address: "77 Borough High Street, London SE1 1NH",
          mapsUrl: mapsUrl("77 Borough High Street London SE1 1NH")
        },
        {
          name: "Bermondsey Beer Mile",
          note: "The Kernel, Fourpure, Cloudwater — all within walking distance. Best on Saturdays (most open from ~11am–5pm).",
          address: "Dockley Road, Bermondsey, London SE16",
          mapsUrl: mapsUrl("Dockley Road Bermondsey London SE16")
        }
      ],
      restaurants: [
        {
          name: "Oma",
          note: "London's first Michelin-starred Greek restaurant. Fire-driven, coastal. Walk-ins possible downstairs at Agora. Steps from the Globe.",
          address: "Borough Market, London SE1",
          mapsUrl: mapsUrl("Oma Restaurant Borough Market London SE1")
        },
        {
          name: "Padella",
          note: "Legendary fresh pasta, no reservations. Queue at noon. Perfect pre- or post-Globe dinner.",
          address: "6 Southwark Street, London SE1 1TQ",
          mapsUrl: mapsUrl("Padella 6 Southwark Street London SE1 1TQ")
        },
        {
          name: "Ikoyi",
          note: "★★ Michelin, West African-influenced tasting menu. 10 min walk toward the West End after the show.",
          address: "180 Strand, London WC2R 1EA",
          mapsUrl: mapsUrl("Ikoyi 180 Strand London WC2R 1EA")
        }
      ]
    },

    // ─────────────────────────────────────────
    // DAY 2 — Sunday, May 3
    // ─────────────────────────────────────────
    {
      date: "2026-05-03",
      label: "Sunday, May 3",
      subtitle: "Notting Hill & Kensington",
      events: [
        {
          time: "9:30 AM",
          name: "Walk to Notting Hill",
          type: "walk",
          notes: "Notting Hill Bookshop en route.",
          tube: "Short walk from flat (~20 min) or District/Circle → Notting Hill Gate."
        },
        {
          time: "12:30 PM",
          name: "Pelican — Sunday Roast",
          type: "food",
          address: "45 All Saints Road, London W11 1HE",
          mapsUrl: mapsUrl("45 All Saints Road London W11 1HE"),
          notes: "Michelin Bib Gourmand gastropub. Gutsy British cooking. Book ahead.",
          website: "thepelicanw11.com"
        },
        {
          time: "2:30 PM",
          name: "Design Museum",
          type: "museum",
          address: "224–238 Kensington High Street, London W8 6AG",
          mapsUrl: mapsUrl("Design Museum 224 Kensington High Street London W8 6AG"),
          tube: "15-min walk from Pelican, or cab.",
          admission: "Free (some exhibitions ticketed)",
          notes: "NIGO exhibition runs May 1–Oct 4, 2026.",
          website: "designmuseum.org"
        },
        {
          time: "4:30 PM",
          name: "Free Time",
          type: "open"
        },
        {
          time: "6:30 PM",
          name: "Devonshire Arms — Dinner",
          type: "food",
          address: "37 Marloes Road, London W8 6LA",
          mapsUrl: mapsUrl("37 Marloes Road London W8 6LA"),
          notes: "2-min walk from the flat."
        }
      ],
      pubs: [
        {
          name: "The Pelican Bar",
          note: "Enjoy a pint at the Pelican's own bar after your Sunday roast — no need to travel.",
          address: "45 All Saints Road, London W11 1HE",
          mapsUrl: mapsUrl("45 All Saints Road London W11 1HE")
        }
      ],
      restaurants: [
        {
          name: "Caractère",
          note: "★ Michelin, Franco-Italian, Emily Roux. One of the best dinners in Notting Hill if not at the Pelican for dinner.",
          address: "209 Westbourne Park Road, London W11 1EA",
          mapsUrl: mapsUrl("209 Westbourne Park Road London W11 1EA")
        },
        {
          name: "Dishoom",
          note: "Multiple London locations. Good option if you drift east toward the West End.",
          address: "12 Upper St Martin's Lane, London WC2H 9FB",
          mapsUrl: mapsUrl("Dishoom 12 Upper St Martins Lane London WC2H 9FB")
        }
      ]
    },

    // ─────────────────────────────────────────
    // DAY 3 — Monday, May 4
    // ─────────────────────────────────────────
    {
      date: "2026-05-04",
      label: "Monday, May 4",
      subtitle: "Bloomsbury & Islington",
      events: [
        {
          time: "Morning",
          name: "British Museum",
          type: "museum",
          address: "Great Russell Street, London WC1B 3DG",
          mapsUrl: mapsUrl("British Museum Great Russell Street London WC1B 3DG"),
          tube: "High Street Kensington → Holborn (District/Circle → Central line). ~30 min.",
          admission: "Free",
          notes: "Sutton Hoo, Rosetta Stone, Lewis Chessmen. Allow 2+ hours.",
          website: "britishmuseum.org"
        },
        {
          time: "Late Morning",
          name: "British Library — Treasures Gallery",
          type: "museum",
          address: "96 Euston Road, London NW1 2DB",
          mapsUrl: mapsUrl("British Library 96 Euston Road London NW1 2DB"),
          tube: "Short walk north from British Museum (~15 min), or Holborn → King's Cross (Central line).",
          admission: "Free",
          notes: "Magna Carta, Gutenberg Bible, Beatles handwritten lyrics.",
          website: "bl.uk"
        },
        {
          time: "4:45 PM",
          name: "Le Petit Auberge — Dinner",
          type: "food",
          address: "283–284 Upper Street, Islington, London N1 2TZ",
          mapsUrl: mapsUrl("283 Upper Street Islington London N1 2TZ"),
          tube: "King's Cross → Highbury & Islington (Victoria line). ~10 min.",
          notes: "Classic French restaurant. Reservations confirmed at 4:45 PM."
        },
        {
          time: "6:15 PM",
          name: "Everything But The Girl — Concert",
          subtitle: "Union Chapel",
          type: "concert",
          address: "Compton Terrace, Islington, London N1 2UN",
          mapsUrl: mapsUrl("Union Chapel Compton Terrace Islington London N1 2UN"),
          tube: "Highbury & Islington (Victoria line / Overground). ~5 min walk from Le Petit Auberge.",
          notes: "Grade I listed Gothic Revival venue. Outstanding acoustics. Line-up 6:15, Doors 7:00, Show 8:00.",
          website: "unionchapel.org.uk"
        }
      ],
      pubs: [
        {
          name: "Ye Olde Mitre",
          note: "London's most hidden pub, built 1546. 15 min walk from British Museum. Closed weekends — Monday is perfect.",
          address: "1 Ely Court, Ely Place, London EC1N 6SJ",
          mapsUrl: mapsUrl("Ye Olde Mitre 1 Ely Court London EC1N 6SJ")
        },
        {
          name: "The Seven Stars",
          note: "Established 1602, survived the Great Fire. Natural afternoon stop between the British Library and Islington.",
          address: "53 Carey Street, London WC2A 2JB",
          mapsUrl: mapsUrl("53 Carey Street London WC2A 2JB")
        },
        {
          name: "The Princess Louise",
          note: "Victorian gin palace with breathtaking original interior. Sam Smith's ales at famously low prices.",
          address: "208 High Holborn, London WC1V 7EP",
          mapsUrl: mapsUrl("208 High Holborn London WC1V 7EP")
        }
      ],
      restaurants: [
        {
          name: "Trullo",
          note: "Handmade pasta, charcoal-grilled meats. One of London's most beloved neighbourhood spots. 5 min from Le Petit Auberge.",
          address: "300 St Paul's Road, Islington, London N1 2LH",
          mapsUrl: mapsUrl("Trullo 300 St Pauls Road Islington London N1 2LH")
        },
        {
          name: "St. John",
          note: "★ Michelin, nose-to-tail British. 15 min south of British Museum. Great post-museum lunch option.",
          address: "26 St John Street, London EC1M 4AY",
          mapsUrl: mapsUrl("St John 26 St John Street London EC1M 4AY")
        },
        {
          name: "Chishuru",
          note: "★ Michelin, West African tasting menu. 5 min from British Museum. UK's first Black female Michelin-starred chef.",
          address: "2 Charlotte Street, London W1T 2LS",
          mapsUrl: mapsUrl("Chishuru 2 Charlotte Street London W1T 2LS")
        }
      ]
    },

    // ─────────────────────────────────────────
    // DAY 4 — Tuesday, May 5
    // ─────────────────────────────────────────
    {
      date: "2026-05-05",
      label: "Tuesday, May 5",
      subtitle: "Trafalgar & West End",
      events: [
        {
          time: "9:30 AM",
          name: "Trafalgar Square",
          type: "walk",
          address: "Trafalgar Square, London WC2N 5DS",
          mapsUrl: mapsUrl("Trafalgar Square London WC2N 5DS"),
          tube: "High Street Kensington → Leicester Square (District → Piccadilly). ~25 min."
        },
        {
          time: "10:00 AM",
          name: "National Gallery",
          type: "museum",
          address: "Trafalgar Square, London WC2N 5DN",
          mapsUrl: mapsUrl("National Gallery Trafalgar Square London WC2N 5DN"),
          admission: "Free",
          notes: "Allow 2+ hours.",
          website: "nationalgallery.org.uk"
        },
        {
          time: "2:00 PM",
          name: "Bancone — Lunch",
          type: "food",
          address: "39 William IV Street, London WC2N 4DD",
          mapsUrl: mapsUrl("Bancone 39 William IV Street London WC2N 4DD"),
          notes: "Excellent fresh pasta near Covent Garden."
        },
        {
          time: "3:30 PM",
          name: "National Portrait Gallery",
          type: "museum",
          address: "St Martin's Place, London WC2H 0HE",
          mapsUrl: mapsUrl("National Portrait Gallery St Martins Place London WC2H 0HE"),
          admission: "Free",
          website: "npg.org.uk"
        },
        {
          time: "5:00 PM",
          name: "The Harp — Happy Hour",
          type: "food",
          address: "47 Chandos Place, London WC2N 4HS",
          mapsUrl: mapsUrl("47 Chandos Place London WC2N 4HS"),
          notes: "CAMRA National Pub of the Year. 2 min walk from Wyndham's Theatre."
        },
        {
          time: "6:30 PM",
          name: "Inter Alia — Play",
          subtitle: "Wyndham's Theatre · Rosamund Pike",
          type: "show",
          address: "32–36 Charing Cross Road, London WC2H 0DA",
          mapsUrl: mapsUrl("Wyndhams Theatre 32 Charing Cross Road London WC2H 0DA"),
          tube: "Leicester Square (Piccadilly/Northern lines). ~5 min walk.",
          admission: "From £55",
          notes: "1hr 45min, no interval. Running Mar 19–Jun 20, 2026.",
          website: "wyndhamstheatre.co.uk"
        }
      ],
      pubs: [
        {
          name: "The Lamb & Flag",
          note: "Dating to 1772. Tucked down a narrow alley near the theatre. Classic pre-show pint stop.",
          address: "33 Rose Street, London WC2E 9EB",
          mapsUrl: mapsUrl("33 Rose Street London WC2E 9EB")
        },
        {
          name: "The Harp",
          note: "CAMRA National Pub of the Year. 2 min walk from Wyndham's. The best pre-show pub in the area.",
          address: "47 Chandos Place, London WC2N 4HS",
          mapsUrl: mapsUrl("47 Chandos Place London WC2N 4HS")
        }
      ],
      restaurants: [
        {
          name: "Ikoyi",
          note: "★★ Michelin, West African-influenced. 5 min walk from the theatre. Outstanding pre-show option.",
          address: "180 Strand, London WC2R 1EA",
          mapsUrl: mapsUrl("Ikoyi 180 Strand London WC2R 1EA")
        },
        {
          name: "Kiln",
          note: "Northern Thai, counter seating, no reservations. Arrive early. 10 min walk from Wyndham's.",
          address: "58 Brewer Street, London W1F 9TL",
          mapsUrl: mapsUrl("Kiln 58 Brewer Street London W1F 9TL")
        },
        {
          name: "Berenjak",
          note: "Persian grillhouse. Energetic pre-theatre option. Walk-in friendly.",
          address: "27 Romilly Street, London W1D 5AL",
          mapsUrl: mapsUrl("Berenjak 27 Romilly Street London W1D 5AL")
        }
      ]
    },

    // ─────────────────────────────────────────
    // DAY 5 — Wednesday, May 6 · War Day
    // ─────────────────────────────────────────
    {
      date: "2026-05-06",
      label: "Wednesday, May 6",
      subtitle: "War Day",
      events: [
        {
          time: "10:00 AM",
          name: "Imperial War Museum",
          type: "museum",
          address: "Lambeth Road, London SE1 6HZ",
          mapsUrl: mapsUrl("Imperial War Museum Lambeth Road London SE1 6HZ"),
          tube: "High Street Kensington → Lambeth North (District → Bakerloo). ~30 min.",
          admission: "Free",
          notes: "WWI & WWII halls, Holocaust exhibition. Allow 2+ hours.",
          website: "iwm.org.uk"
        },
        {
          time: "1:30 PM",
          name: "Churchill War Rooms — Small Group Tour",
          type: "tour",
          address: "King Charles Street, London SW1A 2AQ",
          mapsUrl: mapsUrl("Churchill War Rooms King Charles Street London SW1A 2AQ"),
          tube: "Lambeth North → Westminster (Bakerloo → Jubilee or walk via Lambeth Bridge). ~20 min.",
          notes: "Meet at Victoria Embankment.",
          website: "iwm.org.uk/visits/churchill-war-rooms"
        },
        {
          time: "7:00 PM",
          name: "Akub — Dinner",
          subtitle: "Palestinian Restaurant",
          type: "food",
          address: "27 Uxbridge Street, London W8 7TQ",
          mapsUrl: mapsUrl("Akub 27 Uxbridge Street London W8 7TQ"),
          tube: "Westminster → High Street Kensington (District/Circle). ~25 min.",
          notes: "Close to the flat."
        }
      ],
      pubs: [
        {
          name: "The Harp",
          note: "If you head north after the War Rooms, The Harp is 20 min walk toward Charing Cross.",
          address: "47 Chandos Place, London WC2N 4HS",
          mapsUrl: mapsUrl("47 Chandos Place London WC2N 4HS")
        }
      ],
      restaurants: [
        {
          name: "Kiln",
          note: "Northern Thai counter dining. Easy post-War Rooms option heading toward Kensington.",
          address: "58 Brewer Street, London W1F 9TL",
          mapsUrl: mapsUrl("Kiln 58 Brewer Street London W1F 9TL")
        }
      ]
    },

    // ─────────────────────────────────────────
    // DAY 6 — Thursday, May 7 ⚠️
    // ─────────────────────────────────────────
    {
      date: "2026-05-07",
      label: "Thursday, May 7",
      subtitle: "Westminster & East London",
      warning: "V&A East is 30–40 min from central London. Jikoni (Marylebone) is ~45 min from Stratford. The 5:30 PM show and 7:30 PM dinner may be tight — factor in travel time.",
      events: [
        {
          time: "11:00 AM",
          name: "Westminster Abbey",
          type: "museum",
          address: "Dean's Yard, London SW1P 3PA",
          mapsUrl: mapsUrl("Westminster Abbey Deans Yard London SW1P 3PA"),
          tube: "High Street Kensington → Westminster (District/Circle). ~20 min.",
          admission: "Ticketed — book ahead",
          website: "westminster-abbey.org"
        },
        {
          time: "12:00 PM",
          name: "Jubilee Gallery + Lunch",
          type: "museum",
          address: "St James's Park, London SW1A 2BH",
          mapsUrl: mapsUrl("St James Park London SW1A 2BH"),
          notes: "Lunch at St James Cafe."
        },
        {
          time: "Afternoon",
          name: "V&A East Storehouse",
          type: "museum",
          address: "Parkes Street, Queen Elizabeth Olympic Park, London E20 3AX",
          mapsUrl: mapsUrl("VA East Storehouse Parkes Street Queen Elizabeth Olympic Park London E20 3AX"),
          tube: "Westminster → Hackney Wick (Jubilee → Overground at Stratford). ~40 min. Then 8-min walk.",
          admission: "Free",
          notes: "Behind-the-scenes access to 250,000+ objects.",
          website: "vam.ac.uk/east"
        },
        {
          time: "Afternoon",
          name: "V&A East Museum",
          type: "museum",
          address: "107 Carpenters Road, Queen Elizabeth Olympic Park, London E20 2AR",
          mapsUrl: mapsUrl("VA East Museum 107 Carpenters Road Queen Elizabeth Olympic Park London E20 2AR"),
          tube: "Short walk from Storehouse within the park.",
          admission: "Free (permanent galleries)",
          notes: "Opened April 18, 2026.",
          website: "vam.ac.uk/east"
        },
        {
          time: "5:30 PM",
          name: "The Music Is Black: A British Story",
          subtitle: "Ticketed exhibition @ V&A East",
          type: "show",
          address: "107 Carpenters Road, Queen Elizabeth Olympic Park, London E20 2AR",
          mapsUrl: mapsUrl("VA East Museum 107 Carpenters Road Queen Elizabeth Olympic Park London E20 2AR"),
          admission: "£22.50 weekday / £24.50 weekend",
          notes: "Book in advance.",
          website: "vam.ac.uk/exhibitions/the-music-is-black-a-british-story",
          warning: true
        },
        {
          time: "7:30 PM",
          name: "Jikoni — Dinner",
          subtitle: "Marylebone",
          type: "food",
          address: "19–21 Blandford Street, London W1U 3DH",
          mapsUrl: mapsUrl("Jikoni 19 Blandford Street London W1U 3DH"),
          tube: "Stratford → Bond Street (Central line). ~30 min. Then 10-min walk.",
          notes: "Ravinder Bhogal's 'no borders' kitchen. Asian, Middle Eastern, East African, British.",
          warning: true
        }
      ],
      pubs: [
        {
          name: "Howling Hops Tank Bar",
          note: "London's first tank bar. 5 min from V&A East Storehouse. Outstanding House IPA. Open Thurs–Sun.",
          address: "Unit 9A Queen's Yard, White Post Lane, London E9 5EN",
          mapsUrl: mapsUrl("Howling Hops Unit 9A Queens Yard White Post Lane London E9 5EN")
        },
        {
          name: "Five Points Brewing",
          note: "East London brewery, 20 min walk or short Overground from Hackney Wick.",
          address: "61 Mare Street, London E8 4RG",
          mapsUrl: mapsUrl("Five Points Brewing 61 Mare Street London E8 4RG")
        }
      ],
      restaurants: [
        {
          name: "Miga",
          note: "Modern Korean, currently London's most acclaimed new restaurant. Very hard to book — try lunch if in East London.",
          address: "Hackney, London",
          mapsUrl: mapsUrl("Miga Restaurant Hackney London")
        }
      ]
    },

    // ─────────────────────────────────────────
    // DAY 7 — Friday, May 8 ⚠️
    // ─────────────────────────────────────────
    {
      date: "2026-05-08",
      label: "Friday, May 8",
      subtitle: "City of London & South Bank",
      warning: "Very full day. Consider dropping Dr. Johnson's House or Tate Modern to another day if energy is low.",
      events: [
        {
          time: "9:00 AM",
          name: "Tower of London",
          type: "museum",
          address: "Tower Hill, London EC3N 4AB",
          mapsUrl: mapsUrl("Tower of London Tower Hill London EC3N 4AB"),
          tube: "High Street Kensington → Tower Hill (District/Circle). ~35 min. Direct line.",
          admission: "£29.90 — ⚠️ book timed entry",
          notes: "Crown Jewels, Yeoman Warder tour. Allow 2+ hours.",
          website: "hrp.org.uk/tower-of-london"
        },
        {
          time: "10:45 AM",
          name: "Tower of London River Tour",
          type: "tour",
          address: "Tower Pier, London EC3N 4AB",
          mapsUrl: mapsUrl("Tower Pier London EC3N 4AB"),
          notes: "45 minutes."
        },
        {
          time: "12:00 PM",
          name: "Borough Market — Lunch",
          type: "market",
          address: "8 Southwark Street, London SE1 1TL",
          mapsUrl: mapsUrl("Borough Market 8 Southwark Street London SE1 1TL"),
          tube: "Tower Hill → London Bridge (District/Circle). ~5 min. Or walk via Tower Bridge (~20 min).",
          notes: "Cross the Millennium Bridge from St Paul's for a scenic route.",
          website: "boroughmarket.org.uk"
        },
        {
          time: "Afternoon",
          name: "Tower Bridge",
          type: "walk",
          address: "Tower Bridge Road, London SE1 2UP",
          mapsUrl: mapsUrl("Tower Bridge London SE1 2UP"),
          admission: "Free to walk across. Glass floor walkway ticketed separately.",
          website: "towerbridge.org.uk"
        },
        {
          time: "Afternoon",
          name: "St Paul's Cathedral",
          type: "museum",
          address: "St Paul's Churchyard, London EC4M 8AD",
          mapsUrl: mapsUrl("St Pauls Cathedral London EC4M 8AD"),
          tube: "~15 min walk west from Tower Bridge. Or Tower Hill → St Paul's (Circle/District).",
          admission: "Entry fee applies",
          website: "stpauls.co.uk"
        },
        {
          time: "Afternoon",
          name: "Tate Modern",
          type: "museum",
          address: "Bankside, London SE1 9TG",
          mapsUrl: mapsUrl("Tate Modern Bankside London SE1 9TG"),
          tube: "Short walk from Borough Market. Cross the Millennium Bridge from St Paul's.",
          admission: "Free (some exhibitions ticketed)",
          website: "tate.org.uk/visit/tate-modern"
        },
        {
          time: "Afternoon",
          name: "Dr. Johnson's House",
          subtitle: "Optional — may be tight",
          type: "museum",
          address: "17 Gough Square, London EC4A 3DE",
          mapsUrl: mapsUrl("Dr Johnsons House 17 Gough Square London EC4A 3DE"),
          admission: "£10",
          notes: "Hidden gem near Fleet Street. Tue–Sat 11am–5pm.",
          website: "drjohnsonshouse.org"
        },
        {
          time: "6:30 PM",
          name: "Dishoom Kensington — Dinner",
          type: "food",
          address: "4 Derry Street, London W8 5SE",
          mapsUrl: mapsUrl("Dishoom 4 Derry Street London W8 5SE"),
          tube: "London Bridge → High Street Kensington (Jubilee → District at Earl's Court). ~40 min.",
          notes: "Close to the flat."
        }
      ],
      pubs: [
        {
          name: "The George Inn",
          note: "Only surviving galleried coaching inn in London. Right next to Borough Market. Perfect post-lunch stop.",
          address: "77 Borough High Street, London SE1 1NH",
          mapsUrl: mapsUrl("77 Borough High Street London SE1 1NH")
        },
        {
          name: "The Kernel Brewery",
          note: "London's gold standard craft brewery. 15 min walk or one stop south from London Bridge. Open Fri–Sun.",
          address: "Arch 11, Dockley Road Industrial Estate, London SE16 3SF",
          mapsUrl: mapsUrl("The Kernel Brewery Dockley Road London SE16 3SF")
        },
        {
          name: "Fourpure Brewing Co.",
          note: "Most professional taproom on the Bermondsey Beer Mile. Open Thurs–Sun.",
          address: "22 Rotherhithe New Road, London SE16 3LL",
          mapsUrl: mapsUrl("Fourpure Brewing 22 Rotherhithe New Road London SE16 3LL")
        },
        {
          name: "Cloudwater",
          note: "Manchester's finest, 20+ taps. Next door to Kernel. Open Wed–Sun.",
          address: "Arch 8, Dockley Road, London SE16 3SF",
          mapsUrl: mapsUrl("Cloudwater Arch 8 Dockley Road London SE16 3SF")
        },
        {
          name: "The Mayflower",
          note: "London's oldest riverside pub, dating to 1520. Exceptional terrace. 20 min walk from Borough Market.",
          address: "117 Rotherhithe Street, London SE16 4NF",
          mapsUrl: mapsUrl("The Mayflower 117 Rotherhithe Street London SE16 4NF")
        }
      ],
      restaurants: [
        {
          name: "Oma",
          note: "★ Michelin, Michelin-starred Greek. Steps from Borough Market. Or walk-in at Agora downstairs.",
          address: "Borough Market, London SE1",
          mapsUrl: mapsUrl("Oma Restaurant Borough Market London SE1")
        },
        {
          name: "Padella",
          note: "Legendary fresh pasta. No reservations, arrive at noon.",
          address: "6 Southwark Street, London SE1 1TQ",
          mapsUrl: mapsUrl("Padella 6 Southwark Street London SE1 1TQ")
        },
        {
          name: "St. John",
          note: "★ Michelin, nose-to-tail British. 20 min northwest from Borough Market through the City.",
          address: "26 St John Street, London EC1M 4AY",
          mapsUrl: mapsUrl("St John 26 St John Street London EC1M 4AY")
        }
      ]
    },

    // ─────────────────────────────────────────
    // DAY 8 — Saturday, May 9
    // ─────────────────────────────────────────
    {
      date: "2026-05-09",
      label: "Saturday, May 9",
      subtitle: "Beatles, Notting Hill & Bermondsey",
      events: [
        {
          time: "10:00 AM",
          name: "Beatles Tour",
          type: "tour",
          notes: "3 hours. ⚠️ Get confirmation info.",
          warning: true
        },
        {
          time: "Late Morning",
          name: "Portobello Market / Notting Hill",
          type: "market",
          address: "Portobello Road, London W11",
          mapsUrl: mapsUrl("Portobello Road Market London W11"),
          tube: "Notting Hill Gate (District/Circle) or short walk from flat."
        },
        {
          time: "Lunch",
          name: "Sezanne or Farina Pizza",
          type: "food",
          notes: "Notting Hill area. Choose based on appetite and queue."
        },
        {
          time: "Afternoon",
          name: "Bermondsey Beer Mile",
          type: "walk",
          address: "Dockley Road, Bermondsey, London SE16",
          mapsUrl: mapsUrl("Dockley Road Bermondsey London SE16"),
          tube: "Notting Hill Gate → London Bridge (District/Circle). ~35 min. Then walk south.",
          notes: "Saturday is the best day — most taprooms open from ~11am–5pm. The Kernel, Fourpure, Cloudwater."
        },
        {
          time: "Afternoon",
          name: "White Cube Gallery",
          type: "museum",
          address: "144–152 Bermondsey Street, London SE1 3TQ",
          mapsUrl: mapsUrl("White Cube Gallery Bermondsey Street London SE1 3TQ"),
          tube: "London Bridge (Northern/Jubilee).",
          admission: "Free",
          website: "whitecube.com"
        }
      ],
      pubs: [
        {
          name: "The Kernel Brewery",
          note: "Saturday is prime day. Open from ~11am. Gold standard London craft beer.",
          address: "Arch 11, Dockley Road Industrial Estate, London SE16 3SF",
          mapsUrl: mapsUrl("The Kernel Brewery Dockley Road London SE16 3SF")
        },
        {
          name: "Cloudwater",
          note: "20+ taps. Next door to Kernel on the Beer Mile.",
          address: "Arch 8, Dockley Road, London SE16 3SF",
          mapsUrl: mapsUrl("Cloudwater Arch 8 Dockley Road London SE16 3SF")
        },
        {
          name: "Fourpure Brewing Co.",
          note: "Most polished taproom on the Beer Mile. Great West Coast IPA.",
          address: "22 Rotherhithe New Road, London SE16 3LL",
          mapsUrl: mapsUrl("Fourpure Brewing 22 Rotherhithe New Road London SE16 3LL")
        },
        {
          name: "The Harp",
          note: "Good evening option after a Beer Mile day.",
          address: "47 Chandos Place, London WC2N 4HS",
          mapsUrl: mapsUrl("47 Chandos Place London WC2N 4HS")
        }
      ],
      restaurants: [
        {
          name: "Ikoyi",
          note: "★★ Michelin, West African-influenced. Book well ahead — Saturday fills fast.",
          address: "180 Strand, London WC2R 1EA",
          mapsUrl: mapsUrl("Ikoyi 180 Strand London WC2R 1EA")
        },
        {
          name: "Kiln",
          note: "Northern Thai counter dining, no reservations. Low-effort, high-reward.",
          address: "58 Brewer Street, London W1F 9TL",
          mapsUrl: mapsUrl("Kiln 58 Brewer Street London W1F 9TL")
        },
        {
          name: "Berenjak",
          note: "Persian grillhouse. Walk-in friendly.",
          address: "27 Romilly Street, London W1D 5AL",
          mapsUrl: mapsUrl("Berenjak 27 Romilly Street London W1D 5AL")
        }
      ]
    }
  ],

  // ─────────────────────────────────────────
  // UNSCHEDULED — No date assigned yet
  // ─────────────────────────────────────────
  unscheduled: [
    {
      name: "Handel & Hendrix House",
      category: "Rock / Music",
      address: "25 Brook Street, London W1K 4HB",
      mapsUrl: mapsUrl("Handel Hendrix House 25 Brook Street London W1K 4HB"),
      notes: "Wed–Sun 10am–5pm · £14.50 · Book ahead — small venue, sells out.",
      website: "handelhendrix.org"
    },
    {
      name: "Ronnie Scott's Jazz Club",
      category: "Rock / Music",
      address: "47 Frith Street, London W1D 4HT",
      mapsUrl: mapsUrl("Ronnie Scotts 47 Frith Street London W1D 4HT"),
      notes: "Mon–Sat from 6pm · Book 2–3 weeks ahead for evening shows.",
      website: "ronniescotts.co.uk"
    },
    {
      name: "Soho Music Landmark Walk",
      category: "Rock / Music",
      address: "Denmark Street, London WC2H",
      mapsUrl: mapsUrl("Denmark Street London WC2H"),
      notes: "Self-guided walk through music history sites. Free."
    },
    {
      name: "Abbey Road Studios",
      category: "Rock / Music",
      address: "3 Abbey Road, London NW8 9AY",
      mapsUrl: mapsUrl("Abbey Road Studios 3 Abbey Road London NW8 9AY"),
      notes: "Exterior anytime · Free · Cross the famous zebra crossing. Tube: St John's Wood.",
      website: "abbeyroad.com"
    },
    {
      name: "Daunt Books",
      category: "Lit / Books",
      address: "83–84 Marylebone High Street, London W1U 4QW",
      mapsUrl: mapsUrl("Daunt Books 83 Marylebone High Street London W1U 4QW"),
      notes: "Mon–Sat 9am–7:30pm, Sun 11am–6pm · Beautiful Edwardian bookshop.",
      website: "dauntbooks.co.uk"
    },
    {
      name: "West End Theatre",
      category: "Lit / Books",
      address: "West End, London",
      mapsUrl: mapsUrl("West End London Theatre"),
      notes: "Check current productions for your window.",
      website: "londontheatre.co.uk"
    }
  ]
};

// ─────────────────────────────────────────
// REFERENCE — Pubs, Restaurants, Neighborhoods
// ─────────────────────────────────────────

const REFERENCE = {
  pubs: [
    // Taprooms
    {
      name: "The Kernel Brewery",
      type: "taproom",
      neighborhood: "Bermondsey (Beer Mile)",
      address: "Arch 11, Dockley Road Industrial Estate, London SE16 3SF",
      mapsUrl: mapsUrl("The Kernel Brewery Dockley Road London SE16 3SF"),
      tube: "South Bermondsey, London Bridge",
      open: "Wed–Sun",
      notes: "The gold standard of London craft brewing. Pitch-perfect IPAs and pale ales, outstanding India Porters. Unassuming railway arch setting."
    },
    {
      name: "Five Points Brewing",
      type: "taproom",
      neighborhood: "Hackney",
      address: "61 Mare Street, London E8 4RG",
      mapsUrl: mapsUrl("Five Points Brewing 61 Mare Street London E8 4RG"),
      tube: "London Fields (Overground)",
      open: "Wed–Sun",
      notes: "Spacious taproom. Five Points Pale and JUPA are stone-cold classics. Food from From The Ashes BBQ."
    },
    {
      name: "Orbit Beers",
      type: "taproom",
      neighborhood: "Walworth / Kennington",
      address: "225 Fielding Street, London SE17 3HD",
      mapsUrl: mapsUrl("Orbit Beers 225 Fielding Street London SE17 3HD"),
      tube: "Kennington, Elephant & Castle",
      open: "Thurs–Sun",
      notes: "European tradition — German and Belgian influences done properly. Lagers, pilsners, dark beers."
    },
    {
      name: "Howling Hops Tank Bar",
      type: "taproom",
      neighborhood: "Hackney Wick",
      address: "Unit 9A Queen's Yard, White Post Lane, London E9 5EN",
      mapsUrl: mapsUrl("Howling Hops Unit 9A Queens Yard White Post Lane London E9 5EN"),
      tube: "Hackney Wick (Overground)",
      open: "Thurs–Sun",
      notes: "London's first tank bar. Beer poured direct from the tank. House IPA (6.9%) is outstanding. Sri Lankan food from Kottu House."
    },
    {
      name: "Fourpure Brewing Co.",
      type: "taproom",
      neighborhood: "Bermondsey (Beer Mile)",
      address: "22 Rotherhithe New Road, London SE16 3LL",
      mapsUrl: mapsUrl("Fourpure Brewing 22 Rotherhithe New Road London SE16 3LL"),
      tube: "South Bermondsey",
      open: "Thurs–Sun",
      notes: "The most professional-feeling taproom on the Beer Mile. Great starting point for a Beer Mile crawl."
    },
    {
      name: "Cloudwater (Bermondsey outpost)",
      type: "taproom",
      neighborhood: "Bermondsey (Beer Mile)",
      address: "Arch 8, Dockley Road, London SE16 3SF",
      mapsUrl: mapsUrl("Cloudwater Arch 8 Dockley Road London SE16 3SF"),
      tube: "South Bermondsey, London Bridge",
      open: "Wed–Sun",
      notes: "Manchester's most celebrated brewery. 20+ taps, bright gallery-like space. Juicy IPAs and exceptional seasonal releases."
    },
    {
      name: "Hammerton Brewery",
      type: "taproom",
      neighborhood: "Islington",
      address: "Unit 8 & 9, Roman Way Industrial Estate, London N7 8XG",
      mapsUrl: mapsUrl("Hammerton Brewery Roman Way Industrial Estate London N7 8XG"),
      tube: "Caledonian Road",
      open: "Thurs–Sun",
      notes: "North London favourite. 20 taps of own-brewed beer. Strong on IPAs, pale ales, pilsners."
    },
    {
      name: "Beavertown (Beaverworld)",
      type: "taproom",
      neighborhood: "Tottenham",
      address: "Lockwood Industrial Park, Mill Mead Road, London N17 9QP",
      mapsUrl: mapsUrl("Beaverworld Mill Mead Road Tottenham London N17 9QP"),
      tube: "Tottenham Hale",
      open: "Fri–Sun (verify before visiting)",
      notes: "Gamma Ray APA and Neck Oil session IPA are London classics. Largest brewery in London."
    },
    {
      name: "Brick Brewery",
      type: "taproom",
      neighborhood: "Peckham",
      address: "209 Blenheim Grove, London SE15 4QL",
      mapsUrl: mapsUrl("Brick Brewery 209 Blenheim Grove London SE15 4QL"),
      tube: "Peckham Rye (Overground)",
      open: "Thurs–Sun",
      notes: "No-nonsense taproom, 20+ taps. Beer garden, pop-up art, food from Slow Ritchie's."
    },
    {
      name: "Sambrook's Brewery",
      type: "taproom",
      neighborhood: "Wandsworth",
      address: "Ram Quarter, Wandsworth High Street, London SW18 4JW",
      mapsUrl: mapsUrl("Sambrooks Brewery Ram Quarter Wandsworth High Street London SW18 4JW"),
      tube: "East Putney (then bus) or Wandsworth Town (National Rail)",
      open: "Thurs–Sun",
      notes: "Inside a converted Victorian brewery. Junction Ale and Wandle Ale are classic session bitters."
    },
    {
      name: "Brixton Brewery",
      type: "taproom",
      neighborhood: "Brixton",
      address: "548 Brixton Station Road, London SW9 8PF",
      mapsUrl: mapsUrl("Brixton Brewery 548 Brixton Station Road London SW9 8PF"),
      tube: "Brixton",
      open: "Thurs–Sun",
      notes: "Community-rooted brewery. Electric IPA and ColdHarbour Lager are both excellent. Brixton Village Market is steps away."
    },
    {
      name: "Signature Brew",
      type: "taproom",
      neighborhood: "Walthamstow",
      address: "Unit 15, Uplands Business Park, Blackhorse Lane, London E17 5QJ",
      mapsUrl: mapsUrl("Signature Brew Uplands Business Park Blackhorse Lane London E17 5QJ"),
      tube: "Blackhorse Road",
      open: "Daily",
      notes: "Anchor of the Blackhorse Beer Mile. Studio Lager, Roadie IPA, Backstage IPA. Live music events."
    },
    {
      name: "Villages Brewery",
      type: "taproom",
      neighborhood: "Deptford",
      address: "21–22 Resolution Way, London SE8 4NT",
      mapsUrl: mapsUrl("Villages Brewery 21 Resolution Way London SE8 4NT"),
      tube: "Deptford Bridge (DLR)",
      open: "Fri–Sun",
      notes: "Immaculately run small brewery under railway arches. Rafiki Session IPA and solid lager."
    },
    {
      name: "Camden Town Brewery (Original Taproom)",
      type: "taproom",
      neighborhood: "Kentish Town",
      address: "55–59 Wilkin Street Mews, London NW5 3NN",
      mapsUrl: mapsUrl("Camden Town Brewery 55 Wilkin Street Mews London NW5 3NN"),
      tube: "Kentish Town West (Overground)",
      open: "Fri–Sun",
      notes: "Original taproom under Kentish Town West station. Less mainstream offerings than pub version. Hells Lager is excellent."
    },
    {
      name: "Fuller's Brewery (Griffin Brewery)",
      type: "taproom",
      neighborhood: "Chiswick",
      address: "Chiswick Lane South, London W4 2QB",
      mapsUrl: mapsUrl("Fullers Brewery Chiswick Lane South London W4 2QB"),
      tube: "Turnham Green",
      open: "Tours run regularly — book ahead",
      notes: "The grandaddy of London brewing, founded 1845. The ESB is a world classic. Excellent guided tours."
    },
    // Classic Pubs
    {
      name: "Ye Olde Mitre",
      type: "pub",
      neighborhood: "Holborn",
      address: "1 Ely Court, Ely Place, London EC1N 6SJ",
      mapsUrl: mapsUrl("Ye Olde Mitre 1 Ely Court London EC1N 6SJ"),
      tube: "Chancery Lane, Farringdon",
      open: "Mon–Fri only",
      notes: "Often called London's most hidden pub, built 1546. Tucked down a tiny alley off Hatton Garden. Cheese toasties are essential. Closed weekends."
    },
    {
      name: "The Seven Stars",
      type: "pub",
      neighborhood: "Holborn",
      address: "53 Carey Street, London WC2A 2JB",
      mapsUrl: mapsUrl("53 Carey Street London WC2A 2JB"),
      tube: "Holborn, Temple",
      open: "Daily",
      notes: "Established 1602. Survived the Great Fire. Behind the Royal Courts of Justice. Outstanding ales."
    },
    {
      name: "The Lamb & Flag",
      type: "pub",
      neighborhood: "Covent Garden",
      address: "33 Rose Street, London WC2E 9EB",
      mapsUrl: mapsUrl("33 Rose Street London WC2E 9EB"),
      tube: "Covent Garden, Leicester Square",
      open: "Daily",
      notes: "Dating to 1772. Dickens' old favourite. Tucked down a narrow alley. Real ales, unpretentious atmosphere."
    },
    {
      name: "The George Inn",
      type: "pub",
      neighborhood: "Borough / Southwark",
      address: "77 Borough High Street, London SE1 1NH",
      mapsUrl: mapsUrl("77 Borough High Street London SE1 1NH"),
      tube: "London Bridge",
      open: "Daily",
      notes: "Only surviving galleried coaching inn in London. National Trust-owned. Oak beams, courtyard seating. Mentioned by Dickens."
    },
    {
      name: "The Harp",
      type: "pub",
      neighborhood: "Covent Garden / Charing Cross",
      address: "47 Chandos Place, London WC2N 4HS",
      mapsUrl: mapsUrl("47 Chandos Place London WC2N 4HS"),
      tube: "Charing Cross, Leicester Square",
      open: "Daily",
      notes: "CAMRA National Pub of the Year. Constantly rotating real ale. Serious drinker's pub in a great central location."
    },
    {
      name: "The Princess Louise",
      type: "pub",
      neighborhood: "Holborn",
      address: "208 High Holborn, London WC1V 7EP",
      mapsUrl: mapsUrl("208 High Holborn London WC1V 7EP"),
      tube: "Holborn",
      open: "Daily",
      notes: "A Victorian gin palace frozen in amber. Breathtaking original interior. Sam Smith's ales at famously low prices."
    },
    {
      name: "The Southampton Arms",
      type: "pub",
      neighborhood: "Kentish Town",
      address: "139 Highgate Road, London NW5 1LE",
      mapsUrl: mapsUrl("139 Highgate Road London NW5 1LE"),
      tube: "Kentish Town",
      open: "Daily",
      notes: "Dedicated entirely to independent UK ale and cider. No lagers, no international brands. Blackboard of rotating casks."
    },
    {
      name: "The Mayflower",
      type: "pub",
      neighborhood: "Rotherhithe",
      address: "117 Rotherhithe Street, London SE16 4NF",
      mapsUrl: mapsUrl("The Mayflower 117 Rotherhithe Street London SE16 4NF"),
      tube: "Rotherhithe (Overground)",
      open: "Daily",
      notes: "Claims to stand close to where the Mayflower set out in 1620. Outstanding riverside terrace."
    },
    {
      name: "The Prospect of Whitby",
      type: "pub",
      neighborhood: "Wapping",
      address: "57 Wapping Wall, London E1W 3SH",
      mapsUrl: mapsUrl("57 Wapping Wall London E1W 3SH"),
      tube: "Wapping (Overground)",
      open: "Daily",
      notes: "London's oldest riverside pub, dating to 1520. Once the haunt of sailors and smugglers. Spectacular Thames terrace views."
    },
    {
      name: "The Dove",
      type: "pub",
      neighborhood: "Hammersmith",
      address: "19 Upper Mall, London W6 9TA",
      mapsUrl: mapsUrl("19 Upper Mall Hammersmith London W6 9TA"),
      tube: "Ravenscourt Park, Hammersmith",
      open: "Daily",
      notes: "Low beams, walls plastered in memorabilia. Outstanding riverside terrace. James Thomson reportedly wrote Rule Britannia here."
    }
  ],

  restaurants: [
    {
      name: "Oma",
      neighborhood: "Borough Market / South Bank",
      address: "Borough Market, London SE1",
      mapsUrl: mapsUrl("Oma Restaurant Borough Market London SE1"),
      notes: "London's first Michelin-starred Greek restaurant. Fire-driven, coastal. Walk-ins at Agora downstairs."
    },
    {
      name: "Padella",
      neighborhood: "Borough Market",
      address: "6 Southwark Street, London SE1 1TQ",
      mapsUrl: mapsUrl("Padella 6 Southwark Street London SE1 1TQ"),
      notes: "Legendary fresh pasta. No reservations. Arrive when it opens (noon) or queue. Pici cacio e pepe is legendary."
    },
    {
      name: "Ikoyi",
      neighborhood: "Strand",
      address: "180 Strand, London WC2R 1EA",
      mapsUrl: mapsUrl("Ikoyi 180 Strand London WC2R 1EA"),
      notes: "★★ Michelin, West African-influenced tasting menu. The most distinctive tasting menu in London."
    },
    {
      name: "Kiln",
      neighborhood: "Soho",
      address: "58 Brewer Street, London W1F 9TL",
      mapsUrl: mapsUrl("Kiln 58 Brewer Street London W1F 9TL"),
      notes: "Northern Thai, counter seating, no reservations. Arrive early for a pre-show dinner."
    },
    {
      name: "Berenjak",
      neighborhood: "Soho",
      address: "27 Romilly Street, London W1D 5AL",
      mapsUrl: mapsUrl("Berenjak 27 Romilly Street London W1D 5AL"),
      notes: "Persian grillhouse. Walk-in friendly."
    },
    {
      name: "Dishoom",
      neighborhood: "Multiple locations",
      address: "12 Upper St Martin's Lane, London WC2H 9FB",
      mapsUrl: mapsUrl("Dishoom 12 Upper St Martins Lane London WC2H 9FB"),
      notes: "Bombay-style café. Black dal and bacon naan roll are legendary. Multiple London locations."
    },
    {
      name: "St. John",
      neighborhood: "Smithfield",
      address: "26 St John Street, London EC1M 4AY",
      mapsUrl: mapsUrl("St John 26 St John Street London EC1M 4AY"),
      notes: "★ Michelin, nose-to-tail British. Anthony Bourdain's London favourite. Roast bone marrow is a must."
    },
    {
      name: "Trullo",
      neighborhood: "Islington",
      address: "300 St Paul's Road, London N1 2LH",
      mapsUrl: mapsUrl("Trullo 300 St Pauls Road Islington London N1 2LH"),
      notes: "Handmade pasta, charcoal-grilled meats. One of London's most beloved neighbourhood spots."
    },
    {
      name: "Chishuru",
      neighborhood: "Fitzrovia",
      address: "2 Charlotte Street, London W1T 2LS",
      mapsUrl: mapsUrl("Chishuru 2 Charlotte Street London W1T 2LS"),
      notes: "★ Michelin, West African tasting menu. UK's first Black female Michelin-starred chef."
    },
    {
      name: "Jikoni",
      neighborhood: "Marylebone",
      address: "19–21 Blandford Street, London W1U 3DH",
      mapsUrl: mapsUrl("Jikoni 19 Blandford Street London W1U 3DH"),
      notes: "Ravinder Bhogal's celebrated 'no borders' kitchen. Asian, Middle Eastern, East African and British."
    },
    {
      name: "Le Petit Auberge",
      neighborhood: "Islington",
      address: "283–284 Upper Street, London N1 2TZ",
      mapsUrl: mapsUrl("283 Upper Street Islington London N1 2TZ"),
      notes: "Classic French restaurant on Upper Street. Reservations confirmed for May 4."
    },
    {
      name: "Pelican",
      neighborhood: "Notting Hill",
      address: "45 All Saints Road, London W11 1HE",
      mapsUrl: mapsUrl("45 All Saints Road London W11 1HE"),
      notes: "Michelin Bib Gourmand gastropub. Gutsy British cooking. Book ahead."
    },
    {
      name: "Bancone",
      neighborhood: "Covent Garden",
      address: "39 William IV Street, London WC2N 4DD",
      mapsUrl: mapsUrl("Bancone 39 William IV Street London WC2N 4DD"),
      notes: "Excellent fresh pasta near Covent Garden."
    },
    {
      name: "Akub",
      neighborhood: "Kensington",
      address: "27 Uxbridge Street, London W8 7TQ",
      mapsUrl: mapsUrl("Akub 27 Uxbridge Street London W8 7TQ"),
      notes: "Palestinian restaurant. Close to the flat."
    },
    {
      name: "Miga",
      neighborhood: "Hackney",
      address: "Hackney, London",
      mapsUrl: mapsUrl("Miga Restaurant Hackney London"),
      notes: "Modern Korean. Currently London's most acclaimed new restaurant. Very hard to book — try lunch."
    }
  ],

  neighborhoods: [
    {
      name: "Kensington / South Kensington",
      vibe: "Polished, museum district",
      tube: "High Street Kensington, South Kensington, Gloucester Road",
      notes: "Your home base. District and Circle lines give direct access to most of central London."
    },
    {
      name: "Notting Hill",
      vibe: "Village-like, upscale, colourful",
      tube: "Notting Hill Gate (District, Central, Circle)",
      notes: "Portobello Road Market, independent boutiques, beautiful garden squares. Short walk from the flat."
    },
    {
      name: "Marylebone",
      vibe: "Upscale, calm, village feel",
      tube: "Baker Street, Bond Street, Regent's Park",
      notes: "Marylebone High Street, Daunt Books, Jikoni. Easy from the flat via District/Circle."
    },
    {
      name: "Bloomsbury",
      vibe: "Historic, intellectual, central",
      tube: "Russell Square, Holborn, Tottenham Court Road",
      notes: "British Museum, British Library area. Bedford Square, Marchmont Street."
    },
    {
      name: "Islington",
      vibe: "Residential, buzzy, Upper Street scene",
      tube: "Highbury & Islington (Victoria line, Overground)",
      notes: "Upper Street dining and pubs, Union Chapel, Trullo, Le Petit Auberge."
    },
    {
      name: "Covent Garden / West End",
      vibe: "Lively, central, theatre district",
      tube: "Covent Garden, Leicester Square, Tottenham Court Road",
      notes: "Theatres, Bancone, The Harp, National Gallery. 25 min from the flat."
    },
    {
      name: "Borough / South Bank",
      vibe: "Food market, arts, riverside",
      tube: "London Bridge (Northern/Jubilee), Borough",
      notes: "Borough Market, Tate Modern, Shakespeare's Globe, The George Inn. Easy via District then Jubilee."
    },
    {
      name: "Bermondsey",
      vibe: "Craft beer, food, arts",
      tube: "South Bermondsey, London Bridge",
      notes: "The Beer Mile (Kernel, Fourpure, Cloudwater). Best on Saturdays."
    },
    {
      name: "Hackney / Hackney Wick",
      vibe: "Creative, East London, industrial cool",
      tube: "Hackney Wick (Overground), London Fields (Overground)",
      notes: "Five Points Brewing, Howling Hops, V&A East. Overground from Stratford."
    },
    {
      name: "Chelsea",
      vibe: "Elegant, residential",
      tube: "Sloane Square, South Kensington",
      notes: "Cheyne Walk, Sydney Street. Accessible from Kensington."
    }
  ]
};
