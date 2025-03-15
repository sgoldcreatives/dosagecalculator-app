export interface Med {
  dosage: number;
  name: string;
  concentration: string;
  tags: medTags[];
  dosageForm: medForm;
  bio: string;
}

export type medForm = "🍯" | "💉";
export type medTags =
  | "For Dogs"
  | "For Cats"
  | "Sx"
  | "Tx"
  | "Pain"
  | "Antibiotic"
  | "Steroid";

export const medications: Med[] = [
  {
    dosage: 0.018,
    name: "Atropine",
    concentration: "8 mg/20 mL",
    tags: ["Sx"],
    dosageForm: "💉",
    bio: "Atropine is an injectable medication used in veterinary medicine to increase heart rate and reverse bradycardia, particularly during anesthesia or in cases of poisoning.",
  },
  {
    dosage: 0.022,
    name: "Doxycycline",
    concentration: "100 mg/mL",
    tags: ["Antibiotic", "Tx"],
    dosageForm: "🍯",
    bio: "Doxycycline is a broad-spectrum antibiotic used in veterinary medicine to treat bacterial infections in dogs and cats, including respiratory tract infections, urinary tract infections, and tick-borne diseases.",
  },
  {
    dosage: 0.09,
    name: "Depomedrol",
    concentration: "20 mg/mL",
    tags: ["Steroid", "Tx"],
    dosageForm: "💉",
    bio: "Depomedrol is an injectable corticosteroid used in veterinary medicine to suppress inflammation and allergic reactions. It's employed in the treatment of various inflammatory and immune-mediated conditions in dogs and cats.",
  },
  {
    dosage: 0.018,
    name: "Diphenhydramine",
    concentration: "50 mg/mL",
    tags: ["Sx"],
    dosageForm: "💉",
    bio: "Diphenhydramine is an injectable antihistamine used in veterinary medicine to treat allergic reactions, motion sickness, and as a sedative for premedication before anesthesia.",
  },
  {
    dosage: 0.0226,
    name: "Famotidine",
    concentration: "10 mg/mL",
    tags: ["Tx"],
    dosageForm: "💉",
    bio: "Famotidine is an injectable medication used in veterinary medicine to reduce stomach acid production and prevent ulcers in dogs and cats, particularly during periods of stress or when administering other medications known to cause gastric irritation.",
  },
  {
    dosage: 0.099,
    name: "Cefazolin",
    concentration: "10 mg/mL",
    tags: ["Antibiotic", "For Dogs", "Tx"],
    dosageForm: "💉",
    bio: "Cefazolin is an injectable antibiotic commonly used in veterinary medicine to treat bacterial infections in dogs, particularly those involving the skin, soft tissue, and urinary tract.",
  },
  {
    dosage: 0.045,
    name: "Convenia",
    concentration: "80 mg/mL",
    tags: ["Antibiotic", "Tx"],
    dosageForm: "💉",
    bio: "Convenia (cefovecin) is a long-acting injectable antibiotic used in veterinary medicine for the treatment of bacterial infections in dogs and cats. Its extended duration of action simplifies treatment regimens, making it convenient for pet owners.",
  },
  {
    dosage: 0.045,
    name: "Cerenia",
    concentration: "10 mg/mL",
    tags: ["For Dogs", "For Cats", "Sx"],
    dosageForm: "💉",
    bio: "Cerenia is an injectable medication commonly prescribed to dogs and cats for the prevention and treatment of motion sickness, as well as to control vomiting associated with various conditions.",
  },
  {
    dosage: 0.015,
    name: "Buprenorphine",
    concentration: "0.6 mg/mL",
    tags: ["Pain", "Sx"],
    dosageForm: "💉",
    bio: "Buprenorphine, with a concentration of 0.6 mg/mL, is an injectable opioid analgesic used for pain relief in veterinary medicine, particularly in surgical and postoperative settings.",
  },
  {
    dosage: 0.027,
    name: "Metoclopramide",
    concentration: "5 mg/mL",
    tags: ["Sx"],
    dosageForm: "💉",
    bio: "Metoclopramide is an injectable medication used in veterinary medicine to treat gastrointestinal motility disorders, vomiting, and to facilitate the passage of food through the digestive tract.",
  },
  {
    dosage: 0.045,
    name: "Metronidazole",
    concentration: "100 mg/mL",
    tags: ["Antibiotic", "For Cats", "For Dogs", "Tx"],
    dosageForm: "🍯",
    bio: "Metronidazole is an antibiotic used to treat bacterial and parasitic infections in both dogs and cats, particularly those affecting the gastrointestinal tract.",
  },
  {
    dosage: 0.0999,
    name: "Meloxicam",
    concentration: "0.5 mg/mL",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "🍯",
    bio: "Meloxicam is commonly prescribed for dogs and cats to manage pain, particularly after surgical procedures or in cases of osteoarthritis. This formulation is administered orally.",
  },
  {
    dosage: 0.03,
    name: "Meloxicam",
    concentration: "1.5 mg/mL",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "🍯",
    bio: "Meloxicam is commonly prescribed for dogs and cats to manage pain, particularly after surgical procedures or in cases of osteoarthritis.",
  },
  {
    dosage: 0.018,
    name: "Meloxicam",
    concentration: "5 mg/mL",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "💉",
    bio: "Meloxicam, in injectable form, is utilized in dogs and cats for pain management, particularly after surgical procedures or in cases of osteoarthritis.",
  },
  {
    dosage: 0.066515495,
    name: "Ampicillin Sulbactam",
    concentration: "150 mg/mL",
    tags: ["For Dogs", "For Cats", "Antibiotic", "Sx"],
    dosageForm: "💉",
    bio: "Ampicillin sulbactam is an injectable antibiotic used in veterinary medicine to treat bacterial infections in dogs and cats, particularly those involving the skin, soft tissue, and urinary tract.",
  },
  {
    dosage: 0.009,
    name: "Ketofen",
    concentration: "100 mg/mL",
    tags: ["For Dogs", "Pain", "Sx"],
    dosageForm: "💉",
    bio: "Ketofen is an injectable non-steroidal anti-inflammatory drug (NSAID) used to relieve pain and inflammation in dogs, particularly associated with musculoskeletal disorders and surgical procedures.",
  },
  {
    dosage: 0.04,
    name: "Rimadyl/Carprofen",
    concentration: "50 mg/mL",
    tags: ["For Dogs", "Pain", "Sx"],
    dosageForm: "💉",
    bio: "Rimadyl (Carprofen) is an injectable NSAID commonly used in dogs for pain relief and reduction of inflammation, especially in cases of osteoarthritis and postoperative care.",
  },
  {
    dosage: 0.00907029478,
    name: "Butorphanol",
    concentration: "10 mg/mL",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "💉",
    bio: "Butorphanol is an injectable opioid analgesic used in veterinary medicine to manage pain in dogs and cats, particularly after surgical procedures or in cases of trauma. Dosage is 0.2-0.4 mg/kg SC, IM, or IV q4-6h.",
  },
  {
    dosage: 0.226,
    name: "Propofol",
    concentration: "10 mg/mL",
    tags: ["Sx"],
    dosageForm: "💉",
    bio: "Propofol is an intravenous anesthetic agent commonly used for induction and maintenance of anesthesia in dogs and cats during surgical procedures.",
  },
  {
    dosage: 0.045,
    name: "Onsior",
    concentration: "20 mg/mL",
    tags: ["Pain", "Sx"],
    dosageForm: "💉",
    bio: "Onsior is an injectable non-steroidal anti-inflammatory drug (NSAID) used for pain relief and reduction of inflammation in dogs, particularly associated with orthopedic and soft tissue surgeries.",
  },
  {
    dosage: 0.181,
    name: "Nocita",
    concentration: "13.3 mg/mL",
    tags: ["Pain", "Sx"],
    dosageForm: "💉",
    bio: "Nocita is a long-acting local anesthetic used in dogs to provide postoperative pain relief following certain surgical procedures, particularly orthopedic surgeries such as cruciate ligament repair.",
  },
  {
    dosage: 0.02267,
    name: "Hydromorphone",
    concentration: "2 mg/mL",
    tags: ["Pain", "Sx"],
    dosageForm: "💉",
    bio: "Hydromorphone is a potent injectable opioid analgesic usedfor the management of severe pain in dogs and cats, particularly in cases where other analgesics are ineffective or contraindicated.",
  },
  {
    dosage: 0.0997,
    name: "Hydrocodone",
    concentration: "5 mg/1.5 mg/5 mL",
    tags: ["Pain", "Sx"],
    dosageForm: "🍯",
    bio: "Hydrocodone is an oral opioid analgesic used in veterinary medicine for the management of moderate to severe pain in dogs, particularly after surgical procedures or in cases of trauma.",
  },
  {
    dosage: 0.04,
    name: "Zycortal",
    concentration: "25 mg/mL",
    tags: ["Steroid", "Tx"],
    dosageForm: "💉",
    bio: "Zycortal is an injectable medication used in dogs for the treatment of Addison’s disease (hypoadrenocorticism), a condition characterized by insufficient production of adrenal hormones.",
  },
  {
    dosage: 0.113,
    name: "Ondansetron",
    concentration: "40 mg/20 mL",
    tags: ["Sx"],
    dosageForm: "💉",
    bio: "Ondansetron is an injectable antiemetic medication used in veterinary medicine to prevent and treat nausea and vomiting, particularly in dogs and cats undergoing chemotherapy or experiencing motion sickness.",
  },
  {
    dosage: 0.04535,
    name: "Gabapentin (🐶)",
    concentration: "100 mg/mL",
    tags: ["For Dogs", "Tx"],
    dosageForm: "🍯",
    bio: "Gabapentin is an oral medication used in veterinary medicine to manage neuropathic pain and seizures in cats. It’s particularly effective for chronic pain conditions such as osteoarthritis and intervertebral disc disease.",
  },
  {
    dosage: 0.068027,
    name: "Gabapentin (🐱)",
    concentration: "100 mg/mL",
    tags: ["For Cats", "Tx"],
    dosageForm: "🍯",
    bio: "Gabapentin is an oral medication used in veterinary medicine to manage neuropathic pain and seizures in cats. It’s particularly effective for chronic pain conditions such as osteoarthritis and intervertebral disc disease.",
  },
  {
    dosage: 0.005,
    name: "Triamcinolone/Kenalog",
    concentration: "10 mg/mL",
    tags: ["Steroid"],
    dosageForm: "💉",
    bio: "Steroid injection for allergies, inflammation, and autoimmune diseases; Lasts arond 10 days.",
  },
  {
    dosage: 0.22675737,
    name: "Panacur",
    concentration: "100 mg/mL",
    tags: [],
    dosageForm: "🍯",
    bio: "Dewormer; for 3-5 days.",
  },
];
