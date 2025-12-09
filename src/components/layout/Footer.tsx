import { GradientText } from '@ui/index';
import { FOOTER_COPY } from '@/constants/footer.constant';
import {
  footerStyles,
  containerStyles,
  brandStyles,
  logoStyles,
  descStyles,
  linksContainerStyles,
  linkGroupStyles,
  linkTitleStyles,
  linkStyles,
  copyrightStyles,
} from '@/styles/styles/footer.styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightBrand = FOOTER_COPY.copyright?.brand ?? FOOTER_COPY.brandTitle;
  const copyrightText = FOOTER_COPY.copyright?.text ?? 'All rights reserved.';

  return (
    <footer className={footerStyles}>
      <div className={containerStyles}>
        <div className={brandStyles}>
          <GradientText className={logoStyles}>{FOOTER_COPY.brandTitle}</GradientText>
          <p className={descStyles}>{FOOTER_COPY.brandDesc}</p>
        </div>

        <div className={linksContainerStyles}>
          <div className={linkGroupStyles}>
            <h4 className={linkTitleStyles}>Sections</h4>
            {FOOTER_COPY.sections.map(item => (
              <a key={item.label} href={item.href} className={linkStyles}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={copyrightStyles}>
        © {currentYear} {copyrightBrand}. {copyrightText}
      </div>
    </footer>
  );
}
