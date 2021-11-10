import styled, { css } from "styled-components";

const TextStyleVariantsMap = {
  smNormal: css`
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 0.75rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  `,
  smBold: css`
    font-weight: bold;
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 0.75rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 0.875rem;
    }
  `,
  mdNormal: css`
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 1.125rem;
    }
  `,
  mdBold: css`
    font-weight: bold;
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 1.125rem;
    }
  `,
  lgNormal: css`
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  `,
  lgBold: css`
    font-weight: bold;
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 1.375rem;
    }
  `,
  xlNormal: css`
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 1.625rem;
    }
  `,
  xlBold: css`
    font-weight: bold;
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 1.625rem;
    }
  `,
  xxlNormal: css`
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 1.75rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 1.875rem;
    }
  `,
  xxlBold: css`
    font-weight: bold;
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 1.75rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 1.875rem;
    }
  `,
  xxxlNormal: css`
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 2.125rem;
    }
  `,
  xxxlBold: css`
    font-weight: bold;
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 2.125rem;
    }
  `,
  bigNormal: css`
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 2.25rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  `,
  bigBold: css`
    font-weight: bold;
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 2.25rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  `,
  hugeNormal: css`
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 2.75rem;
    }
  `,
  hugeBold: css`
    font-weight: bold;
    // applied for screen with width > 768px
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }

    // applied for screen with width < 768px
    @media screen and (max-width: 768px) {
      font-size: 2.75rem;
    }
  `,
};

export const StyledText = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]};

  //receive color as prop and if not set, use default color
  color: ${({ color }) => (color ? color : "rgb(198, 198, 209)")};
`;
