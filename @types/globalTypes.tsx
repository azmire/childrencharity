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
  tags: string[];
  ein: string;
};

declare type NavbarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

//declare type Tags = {};

declare type AllCharities = {
  nonprofits: CharityData[];
};

declare type User = {
  id: string;
  username: string;
  email: string;
};

declare type Favourite = {
  id: string;
  favourite: string;
  author: User;
};

declare type SignUpValuesType = {
  signUpValues: {
    email: string;
    password: string;
    username: string;
  };
};
