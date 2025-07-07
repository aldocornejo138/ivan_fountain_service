const reviews = [
  {
    id: 29,
    name: "Souheil H.",
    image: "standard",
    city: "Rancho Palos Verdes,, CA",
    rating: 5,
    date: "July 2, 2025",
    comment:
      "Excellent service, reasonable prices, we have a big fountain with broken pump. They retrieved it from inside the fountain and replaced it with new one. No visible wiring or hoses",
  },
  {
    id: 28,
    name: "Rob R.",
    image: "standard",
    city: "CORONA DL MAR, CA",
    rating: 5,
    date: "July 1, 2025",
    comment:
      "The best fountain service. Showed up and had all parts to fix it the first time. Ivan is great!!",
  },
  {
    id: 27,
    name: "Lisa A.",
    image: "standard",
    city: "Yorba Linda, CA",
    rating: 5,
    date: "June 16, 2025",
    comment:
      "They were on time and extremely respectful of our property. (Our fountain is in the center of our home with French limestone floors requiring great care.) They proceeded to move the very heavy fountain, installed a new pump, put it back together and leveled it perfectly. Ivan also wanted to give us the proper amount of water for the space to avoid over-splashing. They deserve every 5 star rating they have earned.",
  },
  {
    id: 26,
    name: "Renee T.",
    image: "renee",
    city: "Del mar, CA",
    rating: 5,
    date: "June 2, 2025",
    comment:
      "Ivan is the absolute best. I totally recommend him. He cleaned my filthy stainless steel fountain beautifully but when we couldn't get the stainless as shiny as I wanted he came back 3 times to make sure I was satisfied. Where do get that kind of customer service?? His fee was very, very reasonable for his service. You won't make a mistake by hiring Ivan!",
  },
  {
    id: 25,
    name: "Sheryl M.",
    image: "standard",
    city: "Menifee,CA",
    rating: 5,
    date: "may 13, 2025",
    comment:
      "We had a large water feature that had a leaking issue that the original installer could not repair nor figure out what the problem was. I called Ivan in the morning and explained to him what was occurring and he was able to give me an idea of what could potentially be the issue. He came out THE SAME MORNING and knew exactly what the problem was and replaced a faulty pump immediately. He also was able to help us with the splashing problem, all for a very reasonable price. He was extremely knowledgeable and very professional. If I could give more than 5 stars I would!!",
  },
  {
    id: 24,
    name: "Jay M.",
    image: "standard",
    city: "Murrieta, CA",
    rating: 5,
    date: "April 24, 2025",
    comment:
      "5 Golden Stars. Ivan and Edgar were Amazing. I had just bought my home and the previous owner hadnt run the waterfall in years. We didnt even know if the pump worked, but we knew it had leaks because there were weeds coming out of the fountain. Now thanks to Ivan and Edgar, the waterfall is running great without any leaks! Thank you Ivan and Edgar very Much!!!",
  },
  {
    id: 23,
    name: "Heather S.",
    image: "Heather",
    city: "Los Angeles, CA",
    rating: 5,
    date: "February 19, 2025",
    comment:
      "I would give Ivan 50 stars if I could. He is a great, knowledgable resource & he is generous with his time to make sure the job gets done 100% properly. I have a lot of respect for his crew & would recommend him to any fountain enthusiast that needs help! Thank you Ivan!!!",
  },
  {
    id: 22,
    name: "Russell J.",
    image: "standard",
    city: "Southern California",
    rating: 5,
    date: "December 16, 2024",
    comment:
      "I have an old fountain in the courtyard of my office building. The fountain has been a maintenance problem for about 2 years and inoperable for the past fe months. There was talk of making it into a planter, but Ivan and his crew was able to bring the fountain back to life. It's now a central feature of my office building, as it had been in the past.",
  },
  {
    id: 21,
    name: "S N.",
    image: "sn",
    city: "Calabasas, CA",
    rating: 5,
    date: "November 3, 2024",
    comment:
      "Ivan and his guys are top notch. They came and installed two fountains at our new home. From start to finish, they handled everything with care and perfection. I'm very particular when it comes to craftsmanship and finish work and Ivan exceeded my expectations. They were quick and left everything clean, level, and flowing well. Don't bother looking elsewhere (I did the research for you), use Ivan for all your fountain needs!",
  },
  {
    id: 20,
    name: "Seth G.",
    image: "seth",
    city: "Carlsbad, CA",
    rating: 5,
    date: "October 15, 2024",
    comment:
      "Ivan fixed our broken fountain and it is better than new. He is a perfectionist and went above and beyond what I expected. A pool man and an electrician didnt' know how to repair and replace the broken motor. Call Ivan :)",
  },
  {
    id: 19,
    name: "Don T.",
    image: "standard",
    city: "Los Angeles, CA",
    rating: 5,
    date: "October 12, 2024",
    comment:
      "Ivan came out and replaced my fountain pump. He is a true professional and really knows his craft. I highly recommend Ivan for any fountain repair, replacement or maintenance service.",
  },
  {
    id: 18,
    name: "Brandon F.",
    image: "standard",
    city: "Los Angeles, CA",
    rating: 5,
    date: "September 25, 2024",
    comment:
      "Ivan was prompt, fair and delivered a 5 star experience. I would not look anywhere else and give Ivan a call to take care of your needs.",
  },
  {
    id: 17,
    name: "Gary H.",
    image: "standard",
    city: "Ladera Ranch, CA",
    rating: 5,
    date: "August 7, 2024",
    comment:
      "Fixed my fountain in hour and a half it was leaking and i though it was time to trash it thanks ivan its back to 100% looking good Thanks again!",
  },
  {
    id: 16,
    name: "Amy K.",
    image: "standard",
    city: "Southern California, CA",
    rating: 5,
    date: "June 6, 2024",
    comment:
      "We have used Ivan at our previous home to repair an existing fountain and again at our current home to repair 2 fountains. He has quickly responded to my questions and come out for estimates and work in a timely manner. Most recently, he came to repair a pipe that disconnected so he stands by his work and will make sure the customer is happy. I would highly recommend. We have been very satisfied every time.",
  },
  {
    id: 15,
    name: "ROB U.",
    image: "standard",
    city: "Southern California, CA",
    rating: 5,
    date: "May 21, 2024",
    comment:
      "I have two fountains Ivan came to replace a pump on my second Fountain. He's already worked on my first. He did an absolutely fantastic job. I now have both fountains working on their timer more than enough water being fed from the sprinklers. I really appreciate it. Great job. Again.!!!!",
  },
  {
    id: 14,
    name: "Matt B.",
    image: "matt",
    city: "Huntington Beach, CA",
    rating: 5,
    date: "April 15, 2024",
    comment:
      "Ivan's fountain service was top notch. Incredibly responsive and brought our fountain back to life. I had been told that our entire pump had to be replaced by a different company. Ivan and his team cleaned the lines and all connecting parts and I didn't need to undertake an unnecessary and incredibly expensive repair. Highly recommend!!!",
  },

  {
    id: 13,
    name: "Mark B.",
    image: "mark",
    city: "Beverly Hills, CA",
    rating: 5,
    date: "February 27, 2024",
    comment:
      "Fast response, professional service, very reasonable cost. We have an old and very large 3 tiered fountain in our courtyard. It wasn't working and was leaning to one side. Ivan fixed everything in a short amount of time and at a price that was far less than what I thought it would cost.",
  },
  {
    id: 1,
    name: "Carina R.",
    image: "carina",
    city: "Los Angeles, CA",
    width: 2000,
    height: 1498,
    rating: 5,
    date: "November 30, 2023",
    comment:
      "Ivan was a fantastic communicator. I hired Ivan to repair an outdoor, built-in fountain that kept on leaking. After months of struggling to get the fountain working for more than a day, Ivan fixed it. Ivan was easy to communicate with via text, which I appreciate it. I would definitely recommend this business to others.",
  },
  {
    id: 2,
    name: "Antony B.",
    image: "antony",
    city: "Southern California",
    width: 2000,
    height: 1498,
    rating: 5,
    date: "November 16, 2023",
    comment:
      "When I called Ivan he was extremely helpful and immediate gave his option/resolutions on the problems I was having with my fountain. He completely understood the issues and offered improvements to make our life easier. He even gave us an approximate range of the costs.Ivan was knowledgeable, professional and hard working. Within several hours he replaced our pump, added a new auto water fill valve, installed a new light and even added a new base around the fountain to prevent leaves, dirt and rocks to fall in the fountain basin.",
  },
  {
    id: 3,
    name: "Kathryn S.",
    image: "kathryn",
    city: "San Francisco, CA",
    width: 2000,
    height: 1498,
    rating: 5,
    date: "October 6, 2023",
    comment:
      "Fantastic service. Quick turnaround. I have a fountain in a home that was not working when I bought the house. It looks like the original fountain and may be decades old. Ivan came by, took the fountain apart, cleaned and assessed it and was able to replace the necessary parts to get it operational. It is beautiful and sounds lovely.",
  },

  {
    id: 4,
    name: "Ken W.",
    image: "Ken",
    city: "San Diego",
    width: 2000,
    height: 1498,
    rating: 5,
    date: "August 13, 2023",
    comment:
      "The large fountain in our courtyard stopped working  so we called Ivan. He quickly diagnosed the problem that the existing pump is made to be above ground, and any dampness near the pump would trip the GFI. He quickly replaced the pump with a sealed pump and it is now functioning as it should be. Ivan was responsive, professional, confidence-inspiring, and his prices were reasonable. Thank you Ivan!",
  },
  {
    id: 5,
    name: "Cinder P.",
    image: "Cinder",
    city: "FallBrook, CA",
    width: 120,
    height: 120,
    rating: 5,
    date: "July 26, 2023",
    comment:
      "Ivan is amazing! We have been working together for years at The Madd Potter. We him to all of our customers in need of fountain services. The feedback is always positive. Very friendly and professional. When in need call Ivan indeed!",
  },
  {
    id: 6,
    name: "David H.",
    image:
      "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
    city: "Murrieta, CA",
    width: "60",
    height: "60",
    rating: 5,
    date: "July 13, 2023",
    comment:
      "I couldn't be happier.  Ivan was prompt, courteous and clearly knew what he was doing.  In less than an hour, he cleaned the pondless waterfall sump and  replaced the defective pump.  I was expecting an estimate of the damage and he had solved the problem in the same amount of time.",
  },
  {
    id: 7,
    name: "Celine V.",
    image: "Celine",
    city: "Irvine, CA",
    rating: 5,
    date: "Jun 20, 2023",
    comment:
      "Ivan is superb. Great communicator, super reliable & responsible, nice, and just the best vendor we've worked with for these kinds of services. Great quality of work for a great price! Our tenants will be very happy. We asked him to help us with the backyard water fountain cleaning, and he did an amazing job. We will be working with him for all future jobs!",
  },
  {
    id: 8,
    name: "Tina M.",
    image: "Tina",
    city: "San Diego",
    rating: 5,
    date: "November 7, 2022",
    comment:
      "I had been looking for someone to come out and do a deep cleaning on my 3 tier fountain. I've had it for 5 years and I have been cleaning it myself but I knew it needed a deep clean and also to be resealed. Ivan is the right guy for your fountain cleaning job. He and his assistant are on time. Do a great job and in a very organized and clean manner. I was very happy with how my fountain turned out and Ivan also installed a plug for the fountain instead of the sealant putty I had been using. Ivan is a busy guy, so you need to be patient in getting a call back, but it's totally worth it. Thanks Ivan!!!",
  },
  {
    id: 9,
    name: "D.H.",
    image: "DH",
    city: "Murrieta, CA",
    rating: 5,
    date: "October 31, 2022",
    comment:
      "Ivan responded to my text message fast. The scheduling was easy. He came on time, did an amazing work and cleaned up in 45 mins. Highly recommend him for anyone who needs fountain maintenance.",
  },
  {
    id: 10,
    name: "Tushy J.",
    image: "Tushy",
    city: "Murrieta, CA",
    rating: 5,
    date: "August 4, 2022",
    comment:
      "Ivan & his partner came out the next day and replaced the pump, replaced the old tubing, cleaned out the fountain, recommended a good algaecide safe for birds, and even sealed some of the copper fixtures to make sure the water flowed evenly into all the fountain bowls! Awesome!! I HIGHLY recommend Ivan and his team for really making a fountain work to the best of its ability!! Thank you!!!",
  },

  {
    id: 11,
    name: "Elsa L.",
    image: "Elsa",
    city: "San Diego",
    rating: 5,
    date: "August 4, 2022",
    comment:
      "Ivan kept in constant communication with the time and date he would come out. I understand how things are now a days, it's hard to find someone good and when you do they are extremely busy, but I will always wait for good service and you will not be disappointed by Ivan and his team.",
  },
  {
    id: 12,
    name: "William F.",
    image: "William",
    city: "Southern California, CA",
    rating: 5,
    date: "July 22,2021",
    comment:
      "Ivan was professional and quickly demonstrated that he knew the problems and the effective solutions. And he implemented them well, leaving the our fountain operating and looking great.He made the original installer and subsequent people I have hired for the fountain all look like amateurs.",
  },
];

export default reviews;
