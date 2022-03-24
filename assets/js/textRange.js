function handleOnInput(review, maxlength) {
   if (review.value.length > maxlength) {
      review.value = review.value.substr(0, maxlength);
   }
}
