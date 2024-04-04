"use client";
import { Builder, withChildren } from "@builder.io/react";
import AccordionCoreValue from "./components/Accordion/AccordionCoreValue";
import AccordionCoreValueItem from "./components/Accordion/AccordionCoreValueItem";
import AudioCard from "./components/AudioCard/AudioCard";
import Button, { ButtonVariant } from "./components/Button/Button";
import Category from "./components/Category/Category";
import CoffeeAttributeSVG from "./components/CoffeeAttributeSVG/CoffeeAttributeSVG";
import ContactCard from "./components/ContactCard/ContactCard";
import ContactForm from "./components/Form/ContactForm";
import Cursor from "./components/Cursor/Cursor";
import RelatedProduct, {
  CustomDot,
} from "./components/RelatedProduct/RelatedProduct";
import DecorationImage from "./components/DecorationImage/DecorationImage";
import EcosystemCard from "./components/EcosystemCard/EcosystemCard";
import EcosystemCircle from "./components/EcosystemCircle/EcosystemCircle";
import GradientText from "./components/GradientText/GradientText";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import HoverSection from "./components/HoverSection/HoverSection";
import Map from "./components/Map/Map";
import NewPosts from "./components/NewPosts/NewPosts";
import NewPostsMobile from "./components/NewPosts/NewPostsMobile";
import NewsCard from "./components/NewsCard/NewsCard";
import NewsCardDescription from "./components/NewsCard/NewsCardDescription";
import NewsCardTitle from "./components/NewsCard/NewsCardTitle";
import PageContent from "./components/PageContent/PageContent";
import PictureFrame, {
  PictureFrameVariant,
} from "./components/PictureFrame/PictureFrame";
import PlayButton from "./components/PlayButton/PlayButton";
import SectionBanner from "./components/SectionBanner/SectionBanner";
import SectionBannerBreadcrumb from "./components/SectionBanner/SectionBannerBreadcrumb";
import SectionDescription from "./components/SectionDescription/SectionDescription";
import SectionHeading from "./components/SectionHeading/SectionHeading";
import SectionSubheading from "./components/SectionSubheading/SectionSubheading";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import ServerComponentWrapper from "./components/ServerComponentWrapper/ServerComponentWrapper";
import Text from "./components/Text/Text";

Builder.registerComponent(withChildren(Text), {
  name: "BaseText",
  inputs: [
    {
      name: "children",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
});

Builder.registerComponent(withChildren(ServerComponentWrapper), {
  name: "ServerComponentWrapper",
});

Builder.registerComponent(PictureFrame, {
  name: "PictureFrame",
  inputs: [
    {
      name: "borderColor",
      type: "string",
    },
    {
      name: "borderSpanWidth",
      type: "string",
    },
    {
      name: "diameter",
      type: "string",
    },
    {
      name: "image",
      type: "string",
    },
    {
      name: "radius",
      type: "number",
    },
    {
      name: "variant",
      type: "string",
      enum: Object.values(PictureFrameVariant),
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(SectionTitle), {
  name: "SectionTitle",
  inputs: [
    {
      name: "children",
      type: "string",
    },
    {
      name: "textTransform",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(PageContent), {
  name: "PageContent",
  inputs: [
    {
      name: "background",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "shouldPadding",
      type: "boolean",
    },
  ],
  noWrap: true,
});

Builder.registerComponent(withChildren(SectionDescription), {
  name: "SectionDescription",
  inputs: [
    {
      name: "children",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(AudioCard), {
  name: "AudioCard",
});

Builder.registerComponent(PlayButton, {
  name: "PlayButton",
  inputs: [
    {
      name: "onClick",
      type: "string",
    },
    {
      name: "text",
      type: "string",
    },
  ],
});

Builder.registerComponent(EcosystemCard, {
  name: "EcosystemCard",
  inputs: [
    {
      name: "photo",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(EcosystemCircle), {
  name: "EcosystemCircle",
  inputs: [
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(DecorationImage, {
  name: "DecorationImage",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "height",
      type: "number",
    },
    {
      name: "src",
      type: "string",
      required: true,
    },
    {
      name: "width",
      type: "number",
    },
  ],
});

Builder.registerComponent(CoffeeAttributeSVG, {
  name: "CoffeeAttributeSVG",
  inputs: [
    {
      name: "description1",
      type: "string",
      required: true,
    },
    {
      name: "description2",
      type: "string",
      required: true,
    },
    {
      name: "description3",
      type: "string",
      required: true,
    },
    {
      name: "description4",
      type: "string",
      required: true,
    },
    {
      name: "description5",
      type: "string",
      required: true,
    },
    {
      name: "description6",
      type: "string",
      required: true,
    },
    {
      name: "title1",
      type: "string",
      required: true,
    },
    {
      name: "title2",
      type: "string",
      required: true,
    },
    {
      name: "title3",
      type: "string",
      required: true,
    },
    {
      name: "title4",
      type: "string",
      required: true,
    },
    {
      name: "title5",
      type: "string",
      required: true,
    },
    {
      name: "title6",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(RelatedProduct, {
  name: "RelatedProduct",
  noWrap: true,
});

Builder.registerComponent(CustomDot, {
  name: "CustomDot",
});

Builder.registerComponent(NewPosts, {
  name: "NewPosts",
  noWrap: true,
  inputs: [
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(NewsCard, {
  name: "NewsCard",
  inputs: [
    {
      name: "description",
      type: "string",
    },
    {
      name: "photo",
      type: "string",
    },
    {
      name: "tag",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(NewsCardTitle), {
  name: "NewsCardTitle",
});

Builder.registerComponent(withChildren(NewsCardDescription), {
  name: "NewsCardDescription",
});

Builder.registerComponent(withChildren(GradientText), {
  name: "GradientText",
  inputs: [
    {
      name: "className",
      type: "text",
    },
    {
      name: "children",
      type: "text",
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "ThemeButton",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "extraAttribute",
      type: "string",
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "icon",
      type: "string",
    },
    {
      name: "iconPosition",
      type: "string",
    },
    {
      name: "shapeColor",
      type: "string",
    },
    {
      name: "variant",
      type: "string",
      enum: Object.values(ButtonVariant),
    },
    {
      name: "children",
      type: "text",
    },
  ],
});

Builder.registerComponent(withChildren(SectionHeading), {
  name: "SectionHeading",
  inputs: [
    {
      name: "children",
      type: "text",
    },
    {
      name: "className",
      type: "text",
    },
  ],
});

Builder.registerComponent(SectionSubheading, {
  name: "SectionSubheading",
  inputs: [
    {
      name: "textTransform",
      type: "string",
    },
    {
      name: "className",
      type: "text",
    },
    {
      name: "children",
      type: "text",
    },
  ],
});

Builder.registerComponent(HoverSection, {
  name: "HoverSection",
  inputs: [
    {
      name: "description",
      type: "string",
    },
    {
      name: "hoverImage",
      type: "string",
    },
    {
      name: "icon",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(AccordionCoreValue), {
  name: "AccordionCoreValue",
});

Builder.registerComponent(AccordionCoreValueItem, {
  name: "AccordionCoreValueItem",
  inputs: [
    {
      name: "description",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(SectionBanner), {
  name: "SectionBanner",
  inputs: [
    {
      name: "bannerImage",
      type: "string",
    },
    {
      name: "breadcrumbs",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(SectionBannerBreadcrumb, {
  name: "SectionBannerBreadcrumb",
  inputs: [
    {
      name: "href",
      type: "string",
      required: true,
    },
    {
      name: "label",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(Category), {
  name: "Category",
  inputs: [
    {
      name: "active",
      type: "boolean",
    },
    {
      name: "onClick",
      type: "string",
    },
    {
      name: "children",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(NewPostsMobile, {
  name: "NewPostsMobile",
});

Builder.registerComponent(withChildren(ContactCard), {
  name: "ContactCard",
  inputs: [
    {
      name: "bgColor",
      type: "string",
    },
    {
      name: "icon",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "titleClassName",
      type: "string",
    },
  ],
});

Builder.registerComponent(Map, {
  name: "Map",
  inputs: [
    {
      name: "height",
      type: "string",
    },
    {
      name: "iframeSrc",
      type: "string",
    },
    {
      name: "width",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(ContactForm, {
  name: "ContactForm",
  inputs: [
    {
      name: "handleSubmit",
      type: "string",
    },
  ],
});

Builder.registerComponent(Cursor, {
  name: "Cursor",
  noWrap: true,
});
