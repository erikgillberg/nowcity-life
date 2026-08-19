export type HomeSize = "studio" | "one-bed" | "two-bed" | "three-bed" | "shared" | "townhome";
export type HouseholdFit = "solo" | "couple" | "family" | "shared" | "work";
export type RoomKind = "living" | "sleeping" | "kitchen" | "bath" | "entry" | "storage" | "balcony" | "flex" | "shared";

export interface PlanRoom {
  id: string;
  label: string;
  kind: RoomKind;
  x: number;
  y: number;
  width: number;
  depth: number;
  facade?: Array<"N" | "E" | "S" | "W">;
  labelX?: number;
  labelY?: number;
}

export interface HomePlan {
  id: string;
  title: string;
  type: string;
  size: HomeSize;
  beds: string;
  baths: string;
  areaSqFt: number;
  areaRange: string;
  household: HouseholdFit[];
  status: "Illustrative" | "Study option" | "Future phase";
  summary: string;
  rationale: string;
  checks: string[];
  rooms: PlanRoom[];
}

export const homePlans: HomePlan[] = [
  {
    id: "studio-courtyard",
    title: "Courtyard Studio",
    type: "Studio",
    size: "studio",
    beds: "Studio",
    baths: "1 bath",
    areaSqFt: 455,
    areaRange: "430-480 sq ft",
    household: ["solo", "work"],
    status: "Illustrative",
    summary: "A compact home with a real entry, full-height storage, and a daylit living/sleeping room facing the courtyard.",
    rationale: "The kitchen and bath sit on the service side, keeping the main room open to light and furniture flexibility.",
    checks: ["Daylit main room", "Storage at entry", "Wet rooms stacked"],
    rooms: [
      { id: "entry", label: "Entry", kind: "entry", x: 0, y: 2.8, width: 1.4, depth: 1.6 },
      { id: "bath", label: "Bath", kind: "bath", x: 0, y: 0.8, width: 1.8, depth: 2.0 },
      { id: "kitchen", label: "Kitchen", kind: "kitchen", x: 1.8, y: 0.8, width: 3.8, depth: 2.0, labelY: 0.62 },
      { id: "storage", label: "St.", kind: "storage", x: 0, y: 4.4, width: 1.1, depth: 1.0 },
      { id: "closet", label: "Closet", kind: "storage", x: 0, y: 5.4, width: 1.4, depth: 1.5 },
      { id: "living", label: "Living / Sleeping", kind: "living", x: 1.4, y: 2.8, width: 4.2, depth: 4.1, facade: ["S", "E"], labelY: 0.58 }
    ]
  },
  {
    id: "studio-alcove",
    title: "Alcove Studio",
    type: "Studio",
    size: "studio",
    beds: "Studio",
    baths: "1 bath",
    areaSqFt: 525,
    areaRange: "500-545 sq ft",
    household: ["solo", "couple"],
    status: "Study option",
    summary: "A slightly larger studio with a sleeping nook that can be screened without giving up daylight.",
    rationale: "The alcove borrows light from the main facade while the kitchen remains efficient along the entry wall.",
    checks: ["Daylit alcove", "Efficient kitchen wall", "No long hall"],
    rooms: [
      { id: "entry", label: "Entry", kind: "entry", x: 0, y: 2.5, width: 1.5, depth: 1.5 },
      { id: "bath", label: "Bath", kind: "bath", x: 0, y: 0.5, width: 1.9, depth: 2.0 },
      { id: "kitchen", label: "Kitchen", kind: "kitchen", x: 1.9, y: 0.5, width: 3.0, depth: 2.0 },
      { id: "laundry", label: "St.", kind: "storage", x: 4.9, y: 0.5, width: 2.1, depth: 2.0 },
      { id: "closet", label: "Closet", kind: "storage", x: 0, y: 4.0, width: 1.5, depth: 2.5 },
      { id: "sleep", label: "Alcove", kind: "sleeping", x: 1.5, y: 2.5, width: 2.5, depth: 2.5, labelY: 0.68 },
      { id: "living", label: "Living", kind: "living", x: 4.0, y: 2.5, width: 3.0, depth: 4.0, facade: ["S", "E"] }
    ]
  },
  {
    id: "one-corner",
    title: "One-Bed Corner",
    type: "1 bed",
    size: "one-bed",
    beds: "1 bed",
    baths: "1 bath",
    areaSqFt: 650,
    areaRange: "620-690 sq ft",
    household: ["solo", "couple", "work"],
    status: "Illustrative",
    summary: "A corner one-bedroom with two exposures and a work-capable living room.",
    rationale: "Both primary rooms touch the facade; service rooms collect near the entry for simple plumbing and quiet bedrooms.",
    checks: ["Dual aspect", "Bedroom on facade", "Entry storage"],
    rooms: [
      { id: "entry", label: "Entry", kind: "entry", x: 0, y: 2.4, width: 1.6, depth: 1.6 },
      { id: "bath", label: "Bath", kind: "bath", x: 0, y: 0.4, width: 1.9, depth: 2.0 },
      { id: "kitchen", label: "Kitchen", kind: "kitchen", x: 1.9, y: 0.4, width: 3.2, depth: 2.0 },
      { id: "storage", label: "St.", kind: "storage", x: 5.1, y: 0.4, width: 2.7, depth: 2.0 },
      { id: "bed", label: "Bedroom", kind: "sleeping", x: 0, y: 4.0, width: 3.4, depth: 3.2, facade: ["W", "S"] },
      { id: "living", label: "Living / Dining", kind: "living", x: 3.4, y: 2.4, width: 4.4, depth: 4.8, facade: ["S", "E"] }
    ]
  },
  {
    id: "one-live-work",
    title: "Live / Work One-Bed",
    type: "1 bed + flex",
    size: "one-bed",
    beds: "1 bed",
    baths: "1 bath",
    areaSqFt: 735,
    areaRange: "700-760 sq ft",
    household: ["solo", "couple", "work"],
    status: "Study option",
    summary: "A one-bedroom with a small flex room near the window for work, guests, or future nursery use.",
    rationale: "The flex space is deliberately daylit and not buried behind service rooms, so it remains useful over time.",
    checks: ["Daylit flex room", "Adaptable household use", "Wet rooms stacked"],
    rooms: [
      { id: "entry", label: "Entry", kind: "entry", x: 0, y: 2.6, width: 1.5, depth: 1.5 },
      { id: "bath", label: "Bath", kind: "bath", x: 0, y: 0.6, width: 1.9, depth: 2.0 },
      { id: "kitchen", label: "Kitchen", kind: "kitchen", x: 1.9, y: 0.6, width: 3.3, depth: 2.0 },
      { id: "storage", label: "St.", kind: "storage", x: 5.2, y: 0.6, width: 3.6, depth: 2.0 },
      { id: "hall", label: "Hall", kind: "entry", x: 1.5, y: 2.6, width: 1.9, depth: 1.5 },
      { id: "bed", label: "Bedroom", kind: "sleeping", x: 0, y: 4.1, width: 3.4, depth: 3.2, facade: ["W", "S"] },
      { id: "flex", label: "Flex", kind: "flex", x: 3.4, y: 4.1, width: 2.1, depth: 3.2, facade: ["S"] },
      { id: "living", label: "Living", kind: "living", x: 5.2, y: 2.6, width: 3.6, depth: 4.7, facade: ["S", "E"] }
    ]
  },
  {
    id: "two-corner",
    title: "Two-Bed Corner",
    type: "2 bed",
    size: "two-bed",
    beds: "2 bed",
    baths: "1 bath",
    areaSqFt: 890,
    areaRange: "850-925 sq ft",
    household: ["couple", "family", "work"],
    status: "Illustrative",
    summary: "Two bedrooms and the living room all have direct daylight, with bath and storage close to the shared core.",
    rationale: "This is the clearest small-family plan: three useful facade rooms, short entry, and no wasted internal hallway.",
    checks: ["All habitable rooms daylit", "Corner living room", "Compact service band"],
    rooms: [
      { id: "entry", label: "Entry", kind: "entry", x: 0, y: 3.2, width: 1.5, depth: 1.5 },
      { id: "bath", label: "Bath", kind: "bath", x: 0, y: 1.1, width: 1.9, depth: 2.1 },
      { id: "kitchen", label: "Kitchen", kind: "kitchen", x: 1.9, y: 1.1, width: 3.4, depth: 2.1 },
      { id: "bed1", label: "Bedroom 1", kind: "sleeping", x: 0, y: 4.7, width: 3.3, depth: 3.3, facade: ["W", "S"] },
      { id: "bed2", label: "Bedroom 2", kind: "sleeping", x: 3.3, y: 4.7, width: 3.2, depth: 3.3, facade: ["S"] },
      { id: "living", label: "Living / Dining", kind: "living", x: 5.3, y: 1.1, width: 4.2, depth: 6.9, facade: ["S", "E"], labelY: 0.62 }
    ]
  },
  {
    id: "two-through",
    title: "Two-Bed Through Home",
    type: "2 bed",
    size: "two-bed",
    beds: "2 bed",
    baths: "1.5 baths",
    areaSqFt: 980,
    areaRange: "940-1,020 sq ft",
    household: ["family", "work"],
    status: "Illustrative",
    summary: "A through-unit with windows on two sides, useful for cross-breeze and separation between bedrooms and living space.",
    rationale: "Bedrooms face one side of the block, living faces the courtyard, and the service spine stays central.",
    checks: ["Through-unit", "Cross-ventilation potential", "Separated bedrooms"],
    rooms: [
      { id: "entry", label: "Entry", kind: "entry", x: 3.4, y: 3.0, width: 1.6, depth: 1.5 },
      { id: "bath", label: "Bath", kind: "bath", x: 0, y: 3.0, width: 1.9, depth: 2.1 },
      { id: "wc", label: "WC", kind: "bath", x: 1.9, y: 3.0, width: 1.5, depth: 1.5 },
      { id: "kitchen", label: "Kitchen", kind: "kitchen", x: 5.0, y: 3.0, width: 3.2, depth: 2.1 },
      { id: "bed1", label: "Bedroom 1", kind: "sleeping", x: 0, y: 0, width: 3.6, depth: 3.0, facade: ["N"] },
      { id: "bed2", label: "Bedroom 2", kind: "sleeping", x: 3.6, y: 0, width: 3.4, depth: 3.0, facade: ["N"] },
      { id: "storage", label: "St.", kind: "storage", x: 7.0, y: 0, width: 1.2, depth: 1.2 },
      { id: "living", label: "Living / Dining", kind: "living", x: 0, y: 5.1, width: 8.2, depth: 3.8, facade: ["S"], labelY: 0.55 }
    ]
  },
  {
    id: "three-family",
    title: "Three-Bed Family Through Home",
    type: "3 bed",
    size: "three-bed",
    beds: "3 bed",
    baths: "2 baths",
    areaSqFt: 1240,
    areaRange: "1,180-1,300 sq ft",
    household: ["family"],
    status: "Study option",
    summary: "A larger through-home with three real bedrooms, a family-sized living room, and wet rooms grouped near the entry.",
    rationale: "The plan keeps all sleeping rooms on the facade and reserves the deepest middle zone for service, storage, and arrival.",
    checks: ["Three daylit bedrooms", "Two wet rooms stacked", "Family dining space"],
    rooms: [
      { id: "entry", label: "Entry", kind: "entry", x: 4.2, y: 3.1, width: 1.6, depth: 1.6 },
      { id: "bath1", label: "Bath", kind: "bath", x: 0, y: 3.1, width: 1.9, depth: 2.1 },
      { id: "bath2", label: "Shower", kind: "bath", x: 1.9, y: 3.1, width: 1.7, depth: 2.1 },
      { id: "kitchen", label: "Kitchen", kind: "kitchen", x: 5.8, y: 3.1, width: 3.6, depth: 2.2 },
      { id: "bed1", label: "Bedroom 1", kind: "sleeping", x: 0, y: 0, width: 3.4, depth: 3.1, facade: ["N"] },
      { id: "bed2", label: "Bedroom 2", kind: "sleeping", x: 3.4, y: 0, width: 3.2, depth: 3.1, facade: ["N"] },
      { id: "bed3", label: "Bedroom 3", kind: "sleeping", x: 6.6, y: 0, width: 3.2, depth: 3.1, facade: ["N"] },
      { id: "living", label: "Living / Dining", kind: "living", x: 0, y: 5.3, width: 9.8, depth: 3.9, facade: ["S"] }
    ]
  },
  {
    id: "coliving-courtyard",
    title: "Co-Living Cluster",
    type: "Shared home",
    size: "shared",
    beds: "4 rooms",
    baths: "2 baths",
    areaSqFt: 1360,
    areaRange: "1,300-1,420 sq ft",
    household: ["shared"],
    status: "Study option",
    summary: "A shared household plan with private rooms on the facade and a generous common kitchen facing the courtyard.",
    rationale: "Bedrooms remain simple and private; the best light is shared through a large kitchen and common room.",
    checks: ["Daylit private rooms", "Large shared table", "Stacked bathrooms"],
    rooms: [
      { id: "entry", label: "Entry", kind: "entry", x: 4.0, y: 3.0, width: 1.6, depth: 1.6 },
      { id: "bath1", label: "Bath", kind: "bath", x: 0, y: 3.0, width: 1.9, depth: 2.0 },
      { id: "bath2", label: "Bath", kind: "bath", x: 1.9, y: 3.0, width: 1.9, depth: 2.0 },
      { id: "room1", label: "Room 1", kind: "sleeping", x: 0, y: 0, width: 2.8, depth: 3.0, facade: ["N"] },
      { id: "room2", label: "Room 2", kind: "sleeping", x: 2.8, y: 0, width: 2.8, depth: 3.0, facade: ["N"] },
      { id: "room3", label: "Room 3", kind: "sleeping", x: 5.6, y: 0, width: 2.8, depth: 3.0, facade: ["N"] },
      { id: "room4", label: "Room 4", kind: "sleeping", x: 8.4, y: 0, width: 2.8, depth: 3.0, facade: ["N"] },
      { id: "kitchen", label: "Shared Kitchen", kind: "kitchen", x: 5.6, y: 3.0, width: 5.6, depth: 2.2 },
      { id: "living", label: "Common Room", kind: "shared", x: 0, y: 5.2, width: 11.2, depth: 3.8, facade: ["S"] }
    ]
  },
  {
    id: "base-townhome",
    title: "Courtyard Townhome",
    type: "Base home",
    size: "townhome",
    beds: "2-3 bed",
    baths: "2 baths",
    areaSqFt: 1180,
    areaRange: "1,100-1,250 sq ft",
    household: ["family", "work"],
    status: "Future phase",
    summary: "A two-level base home concept with front-door identity and a flexible ground-floor room.",
    rationale: "The base of a courtyard block can support homes with stoops, direct outdoor access, and adaptable work or guest rooms.",
    checks: ["Direct entry", "Ground-floor flex", "Courtyard frontage"],
    rooms: [
      { id: "stoop", label: "Stoop", kind: "balcony", x: 0, y: 5.9, width: 2.2, depth: 0.9, facade: ["S"] },
      { id: "entry", label: "Entry", kind: "entry", x: 0, y: 3.9, width: 1.7, depth: 2.0 },
      { id: "bath", label: "Bath", kind: "bath", x: 0, y: 1.8, width: 1.8, depth: 2.1 },
      { id: "kitchen", label: "Kitchen", kind: "kitchen", x: 1.8, y: 1.8, width: 3.2, depth: 2.1 },
      { id: "flex", label: "Flex Room", kind: "flex", x: 5.0, y: 1.8, width: 3.2, depth: 3.0, facade: ["E"] },
      { id: "living", label: "Living / Dining", kind: "living", x: 1.7, y: 3.9, width: 6.5, depth: 2.9, facade: ["S"] }
    ]
  }
];
