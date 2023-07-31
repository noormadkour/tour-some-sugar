const database = {
  venues: [
    {
      id: 1,
      name: "Rockin' Stadium",
      address: "123 Main St",
      sq_footage: 2000,
      max_occupancy: 100,
    },
    {
      id: 2,
      name: "Funky Warehouse",
      address: "456 Park Ave",
      sq_footage: 3000,
      max_occupancy: 150,
    },
    {
      id: 3,
      name: "Soulful Lounge",
      address: "789 Jazz Rd",
      sq_footage: 2500,
      max_occupancy: 120,
    },
    {
      id: 4,
      name: "Electric Hall",
      address: "1010 Amp St",
      sq_footage: 1800,
      max_occupancy: 90,
    },
    {
      id: 5,
      name: "Hipster Haven",
      address: "1313 Indie Ln",
      sq_footage: 2800,
      max_occupancy: 130,
    },
  ],
  bands: [
    {
      id: 1,
      name: "The Rolling Cones",
      members: 4,
      genre: "Rock",
      year_formed: 2010,
    },
    {
      id: 2,
      name: "The Beatlejuices",
      members: 3,
      genre: "Pop",
      year_formed: 2015,
    },
    {
      id: 3,
      name: "Red Hot Chili Pipers",
      members: 5,
      genre: "Folk Rock",
      year_formed: 2008,
    },
    {
      id: 4,
      name: "Wham Bam Thank You Jam",
      members: 6,
      genre: "Funk",
      year_formed: 2012,
    },
    {
      id: 5,
      name: "The Heavy Metal Files",
      members: 4,
      genre: "Metal",
      year_formed: 2014,
    },
    {
      id: 6,
      name: "The Wandering Minstreltons",
      members: 3,
      genre: "Folk",
      year_formed: 2017,
    },
    {
      id: 7,
      name: "The Swingin' Swans",
      members: 4,
      genre: "Swing",
      year_formed: 2011,
    },
    {
      id: 8,
      name: "The Jazzy Jokers",
      members: 5,
      genre: "Jazz",
      year_formed: 2009,
    },
    {
      id: 9,
      name: "Sonic Boombox",
      members: 3,
      genre: "Electronic",
      year_formed: 2016,
    },
    {
      id: 10,
      name: "The Funky Monkeys",
      members: 4,
      genre: "Funk",
      year_formed: 2013,
    },
    {
      id: 11,
      name: "The Reggae Rays",
      members: 6,
      genre: "Reggae",
      year_formed: 2010,
    },
    {
      id: 12,
      name: "The Rhythmic Raccoons",
      members: 3,
      genre: "Indie",
      year_formed: 2018,
    },
  ],
  bookings: [
    {
      id: 1,
      band_name: "The Rolling Cones",
      venue_name: "Rockin' Stadium",
      booking_date: "2023-08-01",
    },
    {
      id: 2,
      band_name: "The Beatlejuices",
      venue_name: "Funky Warehouse",
      booking_date: "2023-08-01",
    },
    {
      id: 3,
      band_name: "Red Hot Chili Pipers",
      venue_name: "Soulful Lounge",
      booking_date: "2023-08-01",
    },
    {
      id: 4,
      band_name: "Wham Bam Thank You Jam",
      venue_name: "Electric Hall",
      booking_date: "2023-08-01",
    },
    {
      id: 5,
      band_name: "The Heavy Metal Files",
      venue_name: "Hipster Haven",
      booking_date: "2023-08-02",
    },
    {
      id: 6,
      band_name: "The Wandering Minstreltons",
      venue_name: "Rockin' Stadium",
      booking_date: "2023-08-02",
    },
    {
      id: 7,
      band_name: "The Swingin' Swans",
      venue_name: "Funky Warehouse",
      booking_date: "2023-08-02",
    },
    {
      id: 8,
      band_name: "The Jazzy Jokers",
      venue_name: "Soulful Lounge",
      booking_date: "2023-08-02",
    },
    {
      id: 9,
      band_name: "Sonic Boombox",
      venue_name: "Electric Hall",
      booking_date: "2023-08-03",
    },
    {
      id: 10,
      band_name: "The Funky Monkeys",
      venue_name: "Hipster Haven",
      booking_date: "2023-08-03",
    },
    {
      id: 11,
      band_name: "The Reggae Rays",
      venue_name: "Rockin' Stadium",
      booking_date: "2023-08-03",
    },
    {
      id: 12,
      band_name: "The Rhythmic Raccoons",
      venue_name: "Funky Warehouse",
      booking_date: "2023-08-03",
    },
  ],
};

export const getVenues = () => {
  return database.venues.map((venue) => ({ ...venue }));
};

export const getBands = () => {
  return database.bands.map((band) => ({ ...band }));
};

export const getBookings = () => {
  return database.bookings.map((booking) => ({ ...booking }));
};
