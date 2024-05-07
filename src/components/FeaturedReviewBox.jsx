import {
  ShowMoreWrapper,
  StudentReviewCard,
  CourseInfoWrapper,
  Loading,
} from ".";
import { Box, Stack, Typography } from "@mui/material";
import useReviews from "../hooks/useReviews";
import { useParams } from "react-router-dom";
import profileImg from "../assets/images/person.png";
const FeaturedReviewBox = () => {
  // FIXME: here ???? make the end point gets me the reviews of this slug and with every review has its own creator
  const { slug } = useParams();
  const { reviews, isLoading, error } = useReviews(slug);

  const filterdReviews = reviews
    ?.filter(({ rating }) => rating >= 4)
    .sort((a, b) => b.rating - a.rating); // descending order

  return (
    <CourseInfoWrapper title="Featured Review">
      <Loading isLoading={isLoading} error={error}>
        <ShowMoreWrapper maxHeight={623}>
          <Stack
            gap={3}
            sx={{
              "& .student-review-card:not(:last-child)": {
                borderBottom: "1px solid rgb(230, 227, 241)",
              },
            }}
          >
            {filterdReviews && filterdReviews.length === 0 && (
              <Typography>No featured reviews for this course.</Typography>
            )}
            {filterdReviews?.map((courseReview) => (
              <Box className="student-review-card" pb={3} key={courseReview.id}>
                <StudentReviewCard
                  reviewText={courseReview.reviewBody}
                  reviewValue={courseReview.rating}
                  studentAvatar={
                    courseReview.reviewCreator.avatar ?? profileImg
                  }
                  studentFullName={courseReview.reviewCreator.fullName}
                />
              </Box>
            ))}
          </Stack>
        </ShowMoreWrapper>
      </Loading>
    </CourseInfoWrapper>
  );
};

export default FeaturedReviewBox;
