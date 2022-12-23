import Review from '../Review'
import { reviewsData } from './ReviewsList.constants'
import styles from './ReviewsList.module.scss'

const ReviewsList = () => {
  return (
    <section className={styles.container}>
      {reviewsData.map((review, index) => {
        const position = index % 2 ? 'left' : 'right'

        return <Review imagePosition={position} {...review} key={review.title} />
      })}
    </section>
  )
}

export default ReviewsList
