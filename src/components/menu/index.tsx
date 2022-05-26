import Link from 'next/link'
import styled from 'styled-components'
import { MenuLink, MenuLinkSpan, MenuWrapper } from './styles'

const Menu = () => {
  return (
    <HeaderMenu>
      <MenuWrapper>
        <MenuLink>
          <Link href="/">
            <MenuLinkSpan>Home</MenuLinkSpan>
          </Link>
        </MenuLink>
        <MenuLink>
          <Link href="/about">
            <MenuLinkSpan>About</MenuLinkSpan>
          </Link>
        </MenuLink>
        <MenuLink>
          <Link href="/contact">
            <MenuLinkSpan>Contact</MenuLinkSpan>
          </Link>
        </MenuLink>
      </MenuWrapper>
    </HeaderMenu>
  )
}

const HeaderMenu = styled.header`
  -webkit-text-size-adjust: 100%;
  --tds-bezier: cubic-bezier(0.5, 0, 0, 0.75);
  --tds-size: 8px;
  --tds-size--10x: 80px;
  --tds-size--11x: 88px;
  --tds-size--12x: 96px;
  --tds-size--13x: 104px;
  --tds-size--1x: 8px;
  --tds-size--2x: 16px;
  --tds-size--3x: 24px;
  --tds-size--4x: 32px;
  --tds-size--5x: 40px;
  --tds-size--6x: 48px;
  --tds-size--7x: 56px;
  --tds-size--8x: 64px;
  --tds-size--9x: 72px;
  --tds-size--half: 4px;
  --tds-color--black: #000;
  --tds-color--blue10: #2e4994;
  --tds-color--blue20: #3457b1;
  --tds-color--blue30: #3e6ae1;
  --tds-color--green: #12bb00;
  --tds-color--grey10: #171a20;
  --tds-color--grey15: #222;
  --tds-color--grey20: #393c41;
  --tds-color--grey25: #444;
  --tds-color--grey30: #5c5e62;
  --tds-color--grey35: #8e8e8e;
  --tds-color--grey40: #a2a3a5;
  --tds-color--grey45: #bbb;
  --tds-color--grey50: #d0d1d2;
  --tds-color--grey60: #e2e3e3;
  --tds-color--grey65: #eee;
  --tds-color--grey70: #f4f4f4;
  --tds-color--red10: #b74134;
  --tds-color--red20: #ed4e3b;
  --tds-color--white: #fff;
  --tds-color--yellow: #fbb01b;
  --tds-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  --tds-font-family--arabic: 'Noto Sans Arabic';
  --tds-font-family--chinese-hk: 'PingFang HK', 'Microsoft YaHei';
  --tds-font-family--chinese-simplified: 'PingFang SC', 'Microsoft YaHei';
  --tds-font-family--chinese-traditional: 'PingFang TC', 'Microsoft YaHei';
  --tds-font-family--hebrew: Arial;
  --tds-font-family--japanese: 'AXIS Font Japanese W55', 'Hiragino Sans';
  --tds-font-family--korean: 'FB New Gothic';
  --tds-font-family--latin: 'Gotham SSm';
  --tds-font-family--monospace: 'Fira Code', SFMono-Regular, Consolas,
    'Liberation Mono', Menlo, monospace;
  --tds-font-weight--bold: 700;
  --tds-font-weight--book: 400;
  --tds-font-weight--light: 300;
  --tds-font-weight--medium: 500;
  --tds-font-weight--xlight: 200;
  --tds-blur--button: 16px;
  --tds-blur--large: 8px;
  --tds-blur--small: 4px;
  --tds-border-radius: 4px;
  --tds-border-radius--card: 16px;
  --tds-border-radius--card--dense: 8px;
  --tds-border-radius--circle: 100%;
  --tds-border-radius--outline-only: 0.001px;
  --tds-border-style: solid;
  --tds-border-width--large: 3px;
  --tds-border-width--medium: 2px;
  --tds-border-width--small: 1px;
  --tds-box-shadow--large: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
  --tds-box-shadow--large-reverse: 0 -8px 16px 0 rgba(0, 0, 0, 0.16);
  --tds-box-shadow--medium: 0 8px 16px 0 rgba(0, 0, 0, 0.12);
  --tds-box-shadow--off: 0 0 0 0 transparent;
  --tds-box-shadow--small: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  --tds-font-size--10: 10px;
  --tds-font-size--20: 12px;
  --tds-font-size--30: 14px;
  --tds-font-size--40: 17px;
  --tds-font-size--50: 20px;
  --tds-font-size--55: 23px;
  --tds-font-size--60: 24px;
  --tds-font-size--70: 28px;
  --tds-font-size--75: 34px;
  --tds-font-size--80: 40px;
  --tds-line-height--10: 18px;
  --tds-line-height--20: 20px;
  --tds-line-height--30: 20px;
  --tds-line-height--40: 24px;
  --tds-line-height--50: 24px;
  --tds-line-height--60: 28px;
  --tds-line-height--70: 36px;
  --tds-line-height--75: 44px;
  --tds-line-height--80: 48px;
  --tds-line-height--unitless: 1.414;
  --tds-opacity--100: 1;
  --tds-opacity--30: 0.3;
  --tds-opacity--50: 0.5;
  --tds-opacity--70: 0.7;
  --tds-opacity--transparent: 0;
  --tds-padding--card: 24px;
  --tds-padding--card--dense: 16px;
  --tds-border-width--hairline: 0.5px;
  --tds-base-font_family: var(--tds-font-family--combined);
  --tds-base-font_size: var(--tds-font-size--30);
  --tds-base-line_height: var(--tds-line-height--30);
  --tds-color--error: var(--tds-color--red10);
  --tds-color--hairline: var(--tds-color--grey50);
  --tds-color--inverse: var(--tds-color--white);
  --tds-color--primary: var(--tds-color--blue30);
  --tds-color--primary-highlight: var(--tds-color--blue20);
  --tds-color--rgb-shade: 0, 0, 0;
  --tds-color--rgb-shade--inverse: 255, 255, 255;
  --tds-color--scrim--semitransparent: hsla(0, 0%, 100%, 0.7);
  --tds-color--secondary-accent: var(--tds-color--grey50);
  --tds-color--secondary-highlight: var(--tds-color--black);
  --tds-color--tertiary: var(--tds-color--grey70);
  --tds-color--tertiary-highlight: var(--tds-color--grey65);
  --tds-caption--color: var(--tds-color--grey30);
  --tds-dialog--background-color: var(--tds-color--white);
  --tds-form-label--color: var(--tds-color--grey30);
  --tds-pill--blur-color-highlight: rgba(0, 0, 0, 0.072);
  --tds-text--color--light: var(--tds-color--grey30);
  --tds-text--color--placeholder: var(--tds-color--grey40);
  --tds-text--color--primary: var(--tds-color--blue30);
  --tds-toggle--background-color: hsla(0, 0%, 59%, 0.1);
  --tds-toggle--fill-color: var(--tds-color--white);
  --tds-text--contrast-high: var(--tds-color--grey10);
  --tds-text--contrast-low: var(--tds-color--grey30);
  --tds-text--contrast-medium: var(--tds-color--grey20);
  --tds-code-bg-color: var(--tds-color--grey70);
  --tds-code-border-color: var(--tds-color--grey60);
  --tds-code-color: var(--tds-text--color);
  --tds-color--focus: var(--tds-color--grey35);
  --tds-outline--focus: 2px solid var(--tds-color--focus);
  --tds-background-image--check: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="hsl(218, 7%, 24%)" d="M6.592 11.58a.748.748 0 0 1-.53-.22L3.22 8.517a.75.75 0 1 1 1.06-1.061l2.312 2.312L11.72 4.64a.75.75 0 1 1 1.06 1.06l-5.658 5.66a.748.748 0 0 1-.53.22z"/></svg>');
  --tds-background-image--minus: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="hsl(218, 7%, 24%)" d="M13 8a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1 0-1.5h8.5A.75.75 0 0 1 13 8z"/></svg>');
  color: var(--tds-text--color);
  --tds-height--pill: var(--tds-size--5x);
  --tds-border-radius--pill: calc(var(--tds-height--pill) / 2);
  --tds-form--indent: var(--tds-border-radius--pill);
  --tds-form--gap: var(--tds-size--3x);
  --tds-form-input-choice--check-size: var(--tds-size--2x);
  --tds-form-input-choice--radio-size: 10px;
  --tds-height--choice: var(--tds-size--3x);
  --tds-banner--padding: var(--tds-size--2x);
  --tds-btn--font-size: var(--tds-font-size--20);
  --tds-form-input--collapsed-inline-size: var(--tds-size--5x);
  --tds-form-input--collapsed-padding-inline-start: var(--tds-size--1x);
  --tds-icon--bg: transparent;
  --tds-icon--size: 24px;
  --tds-gutter: var(--tds-size--3x);
  --tds-gutter--half: calc(var(--tds-size--3x) / 2);
  --tds-gutter--negative: calc(var(--tds-size--3x) * -1);
  --tds-gutter--half_negative: calc(var(--tds-gutter--negative) / 2);
  --tds-shell-header-height: var(--tds-size--7x);
  --tds-modal--height: auto;
  --tds-modal--width: 772px;
  --tds-modal-backdrop--rgb: 0, 0, 0;
  --tds-site-header--height: var(--tds-size--7x);
  --tds-table--vertical-align: middle;
  --tds-table-background-color: transparent;
  --tds-table-border_color: var(--tds-color--grey50);
  --tds-table-border_spacing: 0;
  --tds-table-border_width: 1px;
  --tds-table-caption-background-color: transparent;
  --tds-table-caption-top: 0;
  --tds-table-header-font_size: var(--tds-font-size--30);
  --tds-table-padding--horizontal: var(--tds-size--2x);
  --tds-table-padding--vertical: var(--tds-size--2x);
  --tds-heading--font-weight: 500;
  --tds-heading--letter-spacing: 0;
  --tds-heading--text-transform: none;
  --tds-animate-transition-duration--medium: 600ms;
  --tds-animate-transition-duration--short: 500ms;
  --tds-animate-transition-function--base: linear;
  --tds-animate-transition-function--mktg: cubic-bezier(0.165, 0.84, 0.44, 1);
  --tds-animate-transition-property: opacity;
  --tds-animate-transition_duration--long: 1500ms;
  --tds--fade-in: tds--fade-in 1s ease;
  --tds--pulsing: tds--pulsing 1.5s infinite ease-in-out;
  --tds--rotating: tds--rotating 1.5s infinite linear;
  --tcl-grid-four-column-inline-size: 432px;
  --tcl-grid-three-column-inline-size: 318px;
  --tcl-grid-two-column-inline-size: 204px;
  --tcl-showcase-screen-block-size: auto;
  --tcl-showcase-screen-inline-size: auto;
  --chrome-status-bar-height: var(--tds-size--6x);
  --safari-status-bar-height: calc(var(--tds-size--1x) * 11);
  --tcl-showcase-down-arrow-display: flex;
  --tcl-icon--border-color: var(--tds-color--secondary);
  --tcl-component-padding-desktop-block-end: 0;
  --tcl-component-padding-desktop-block-start: 0;
  --tcl-component-padding-mobile-block-end: 0;
  --tcl-component-padding-mobile-block-start: 0;
  --tcl-component-padding-tablet-block-end: 0;
  --tcl-component-padding-tablet-block-start: 0;
  --tcl-section-padding-desktop-block-end: 0;
  --tcl-section-padding-desktop-block-start: 0;
  --tcl-section-padding-mobile-block-end: 0;
  --tcl-section-padding-mobile-block-start: 0;
  --tcl-section-padding-tablet-block-end: 0;
  --tcl-section-padding-tablet-block-start: 0;
  --tcl-section-bottom-gradient-block-size: 20%;
  --tcl-section-bottom-gradient-opacity: 0.5;
  --tcl-section-bottom-gradient-end: transparent;
  --tcl-section-bottom-gradient-start: #000;
  --tcl-section-top-gradient-block-size: 20%;
  --tcl-section-top-gradient-opacity: 0.5;
  --tcl-section-top-gradient-end: transparent;
  --tcl-section-top-gradient-start: #000;
  --tcl-button-backdrop-filter: none;
  --tcl-button-inline-size: auto;
  --tcl-button-margin-block-end: 0;
  --tcl-button-margin-block-start: 0;
  --tcl-button-margin-inline-end: 0;
  --tcl-button-margin-inline-start: 0;
  --tcl-button-min-inline-size: 0;
  --tcl-button-max-inline-size: none;
  --tcl-button-text-transform: uppercase;
  --template-landing-page-block-size: 100vh;
  --template-landing-page-footer-margin-block-start: -70px;
  --tcl-footer-display: none;
  --tcl-homepage-hero-content-display: none;
  --tcl-homepage-hero-content-z-index: -1;
  --tcl-site-header-wrapper-inset-block-start: 0;
  --tcl-video-asset-block-size: auto;
  --tcl-video-asset-display: block;
  --tcl-video-asset-inline-size: 100%;
  --tcl-video-asset-inset-block-end: 0;
  --tcl-video-asset-inset-block-start: 0;
  --tcl-video-asset-inset-inline-start: 0;
  --tcl-video-asset-margin-block-start: 0;
  --tcl-video-asset-margin-inline-end: 0;
  --tcl-video-asset-margin-inline-start: 0;
  --tcl-video-asset-object-fit: cover;
  --tcl-video-asset-object-position-x: center;
  --tcl-video-asset-object-position-y: center;
  --tcl-video-asset-position: static;
  --tcl-video-asset-transform: none;
  --tcl-video-border-radius: 0;
  --tcl-video-bottom-gradient-block-size: 20%;
  --tcl-video-bottom-gradient-end: transparent;
  --tcl-video-bottom-gradient-opacity: 0.5;
  --tcl-video-bottom-gradient-start: #000;
  --tcl-video-inline-size: 100%;
  --tcl-video-overflow: visible;
  --tcl-video-position: relative;
  --tcl-video-top-gradient-block-size: 20%;
  --tcl-video-top-gradient-end: transparent;
  --tcl-video-top-gradient-opacity: 0.5;
  --tcl-video-top-gradient-start: #000;
  --tcl-image-aspect-ratio-1-1-block-size: 100vw;
  --tcl-image-aspect-ratio-16-9-block-size: 177.77778vw;
  --tcl-image-aspect-ratio-3-4-block-size: 75vw;
  --tcl-image-aspect-ratio-5-3-block-size: 166.66667vw;
  --tcl-image-asset-block-size: auto;
  --tcl-image-asset-border-radius: 0;
  --tcl-image-asset-display: block;
  --tcl-image-asset-float: none;
  --tcl-image-asset-inline-size: 100%;
  --tcl-image-asset-inset-block-end: 0;
  --tcl-image-asset-inset-block-start: 0;
  --tcl-image-asset-inset-inline-start: 0;
  --tcl-image-asset-margin-block-start: 0;
  --tcl-image-asset-margin-inline-end: 0;
  --tcl-image-asset-margin-inline-start: 0;
  --tcl-image-asset-max-inline-size: none;
  --tcl-image-asset-min-inline-size: 0;
  --tcl-image-asset-object-fit: cover;
  --tcl-image-asset-object-position-x: center;
  --tcl-image-asset-object-position-y: center;
  --tcl-image-asset-opacity: 1;
  --tcl-image-asset-position: static;
  --tcl-image-asset-transform: none;
  --tcl-image-asset-visibility: visible;
  --tcl-image-inline-size: 100%;
  --tcl-image-overflow: visible;
  --tcl-image-position: relative;
  --tcl-image-bottom-gradient-block-size: 20%;
  --tcl-image-bottom-gradient-opacity: 0.5;
  --tcl-image-bottom-gradient-end: transparent;
  --tcl-image-bottom-gradient-start: #000;
  --tcl-image-top-gradient-block-size: 20%;
  --tcl-image-top-gradient-opacity: 0.5;
  --tcl-image-top-gradient-end: transparent;
  --tcl-image-top-gradient-start: #000;
  --tcl-homepage-hero-block-size: 100vh;
  --tcl-homepage-hero-footer-padding-block-end: var(--tds-size--7x);
  --tcl-homepage-hero-inline-size: 100%;
  --tcl-homepage-hero-asset-offset-x-desktop: 0vw;
  --tcl-homepage-hero-asset-offset-x-mobile: 0vw;
  --tcl-homepage-hero-asset-offset-y-desktop: 0vh;
  --tcl-homepage-hero-asset-offset-y-mobile: 0vh;
  --tcl-homepage-hero-buttons-padding-bottom-offset-desktop: 0vh;
  --tcl-homepage-hero-buttons-padding-bottom-offset-mobile: 0vh;
  --tcl-homepage-hero-content-opacity: 1;
  --tcl-homepage-hero-heading-font-size-desktop: var(--tds-font-size--80, 40px);
  --tcl-homepage-hero-heading-font-size-mobile: 36px;
  --tcl-homepage-hero-heading-opacity: 1;
  --tcl-homepage-hero-heading-transition: transform 0.5s ease-in-out 0.5s,
    opacity 0.5s ease-in-out 0.5s;
  --tcl-homepage-hero-subcopy-transition: transform 0.5s ease-in-out 1s,
    opacity 0.5s ease-in-out 1s;
  --tcl-homepage-hero-overlay-display: grid;
  --tcl-homepage-hero-subcopy-font-size-desktop: inherit;
  --tcl-homepage-hero-subcopy-font-size-mobile: inherit;
  --tcl-button-group-margin-block: var(--tds-size--2x);
  --tcl-button-group-min-inline-size: 100%;
  --tcl-button-group-max-inline-size-three-buttons: 432px;
  --tcl-button-group-max-inline-size-two-buttons: calc(
    (min(100vw, 1140px) - 24px * 15) / 12 * 4 * 2 + 24px
  );
  --tcl-button-group-min-inline-size-two-buttons: calc(
    (min(100vw, 1140px) - 24px * 15) / 12 * 2 * 2 + 24px
  );
  --tcl-body-accessible-background-color: #757575;
  --tcl-body-background-color: var(--tds-color--white);
  --tds-border_width--hairline: 0.5px;
  --tds-border_width--small: 1px;
  --tds-border_width--medium: 3px;
  --tds-border_style--base: solid;
  --vh: 4.51px;
  -webkit-font-smoothing: antialiased;
  font-size: var(--tds-base-font_size);
  font-weight: 400;
  line-height: var(--tds-base-line_height);
  --tds-font-family--combined: var(--tds-font-family--latin),
    var(--tds-font-family) !important;
  font-family: var(--tds-font-family--combined, --tds-base-font_family, system);
  --tds-shell-footer-height: 52px;
  --tds-shell-content-height: calc(
    100vh - var(--tds-shell-footer-height) - 18px
  );
  --tds-nav-item--color: var(--tds-color--grey10);
  --tds-nav-item--color-highlighted: var(--tds-color--grey10);
  --tds-icon-fill-secondary: var(--tds-color--grey10);
  --tds-heading--color: var(--tds-color--grey10);
  --tds-text--color: var(--tds-color--grey10);
  --tds-color--secondary: var(--tds-color--grey10);
  --tds-pill--blur-color: hsla(0, 0%, 0%, 0.05);
  box-sizing: border-box;
  scroll-behavior: smooth;
  outline-offset: 2px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  animation: var(--tds--fade-in);
  --tds-animate-backdrop-transition: opacity 0.5s ease, visibility 0s 0.5s;
  --tds-animate-backdrop-opacity: 0;
  --tds-animate-backdrop-visibility: hidden;
  --tds-animate-backdrop-top: 12px;
  --tds-animate-backdrop-left: 725px;
  --tds-animate-backdrop-height: 32px;
  --tds-animate-backdrop-width: 93px;
`

export default Menu
