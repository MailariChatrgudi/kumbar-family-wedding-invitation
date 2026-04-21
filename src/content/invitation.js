import couplePhoto from "../assets/photos/couple-placeholder.svg";
import bridePhoto from "../assets/photos/bride-placeholder.svg";
import groomPhoto from "../assets/photos/groom-placeholder.svg";
import highlight1 from "../assets/photos/highlight-1.svg";
import highlight2 from "../assets/photos/highlight-2.svg";
import highlight3 from "../assets/photos/highlight-3.svg";

export const invitation = {
  meta: {
    title: "Wedding Invitation",
  },
  media: {
    heroCouple: couplePhoto,
    bride: bridePhoto,
    groom: groomPhoto,
    highlights: [highlight1, highlight2, highlight3],
    audio: null,
  },
  couple: {
    brideName: "Bride Name",
    groomName: "Groom Name",
    brideRole: "Daughter of",
    groomRole: "Son of",
    brideFamily: "Mr. & Mrs. ________",
    groomFamily: "Mr. & Mrs. ________",
  },
  event: {
    date: "Sunday, 21 June 2026",
    time: "11:05 AM",
    venue: "Venue Name, City",
  },
  familyText:
    "With the blessings of the Almighty and our elders, we request the honor of your gracious presence and blessings on the auspicious occasion of the wedding ceremony of our beloved children.",
  fullDetails: [
    { label: "Muhurat", value: "11:05 AM – 12:20 PM" },
    { label: "Reception", value: "7:00 PM onwards" },
    { label: "Address", value: "Full address line goes here, City, State" },
  ],
  contact: [
    { name: "Contact 1", phone: "+91 90000 00000" },
    { name: "Contact 2", phone: "+91 90000 00000" },
  ],
};

