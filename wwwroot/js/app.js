var hasPaid = false;

function startWebMonetization(){

    if (document.monetization) {
        document.monetization.addEventListener('monetizationstart', () => {

          hasPaid = true;

        })
      }

      // check if monetization is implemented

      if (document.monetization){
      
      //monetization start event.
      document.monetization.addEventListener('monetizationstart', function(event){

        hasPaid = true;

      });
      
      //monetization progress event.
      document.monetization.addEventListener('monetizationprogress', function(event){

        hasPaid = true;

      });

      }

}

function enableWebMonetization(paymentPointer) {

  const monetizationTag = document.createElement('meta');
  monetizationTag.name = "monetization";
  monetizationTag.content = paymentPointer;
  document.head.appendChild(monetizationTag);
  
}

function ReadFull(isPremium){
 
  if(!isPremium)
  {
    location.href = "article.html";
  }
  else if(isPremium && hasPaid)
  {
    location.href = "premium-article.html";
  }
  else
  {
    $('#premiumArticleModal').modal('show');
  }

}

function closePremiumModal() 
{

  $('#premiumArticleModal').modal('hide');

}
