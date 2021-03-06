import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { SanityArticleSliderInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ArticleTileSlider from '../ArticleTileSlider';
import HeroSlider from '../HeroSlider';

const useStyles = makeStyles(theme => ({
  section: {
    backgroundColor: '#b8f0c0',
    paddingBottom: 48,
    [theme.breakpoints.up('md')]: {
      paddingTop: 48,
      paddingBottom: 48,
    },
  },
  padTop0: {
    paddingTop: 0,
  },
}));

const SanityArticleSlider: FunctionComponent<SanityArticleSliderInterface> = ({
  name,
  slides,
  headline,
  slideType,
}) => {
  const classes = useStyles();

  const heroSliderType = slideType.name.indexOf('Hero') >= 0;
  const tileSliderType = slideType.name.indexOf('Tile') >= 0;

  return (
    <section
      className={classNames(
        classes.section,
        heroSliderType ? classes.padTop0 : null
      )}
    >
      <Container maxWidth="lg">
        {slides && heroSliderType && (
          <HeroSlider
            name={name}
            slides={slides}
            headline={headline}
          />
        )}
        {slides && tileSliderType && (
          <ArticleTileSlider
            name={name}
            slides={slides}
            headline={headline}
          />
        )}
      </Container>
    </section>
  );
};

export default SanityArticleSlider;
