## React Review Stars

An example project for rendering review stars for a single average review, taking _rating_ and _maxRating_ as parameters.

Here's the heart of the code, where we determine the number of full stars, empty stars, and the inevitable partial star that exists between them.

```JSX
const renderStars = (rating, maxRating) => {
  const baseRating = basify(rating),
    hasPartialStar = rating % 1 > 0,
    fullStars = Array.from(new Array(baseRating), (star, i) => <Star key={i}>★</Star>),
    emptyStarCount = rating >= maxRating - 1 ? 0 : maxRating - baseRating - 1,
    emptyStars = Array.from(new Array(emptyStarCount), (star, i) => <Star key={i}>☆</Star>);

  return (
    <React.Fragment>
      <figure style={{ display: 'flex' }}>
        {fullStars.map(star => star)}
        {hasPartialStar && (
          <PartialStarContainer>
            <PartialStar percent={ratingPercent(rating % 1, 1)}>★</PartialStar>
            <Star>☆</Star>
          </PartialStarContainer>
        )}
        {emptyStars.length > 0 && emptyStars.map(star => star)}
      </figure>
    </React.Fragment>
  );
};
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
