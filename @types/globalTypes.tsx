declare type CharityInfo = {
  charity: CharityData;
};
declare type CharityData = {
  name: string;
  coverImageUrl: string;
  description: string;
  location: string;
  websiteUrl: string;
  logoUrl: string;
};

declare type NavbarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
