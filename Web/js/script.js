	$(document).ready(function() {

		"use strict";

		$(".toprofileav").on("click", function(e) {
			e.preventDefault();
			$.ajax({
				"url" : "./html/perfil.html",
				"method" : "GET",
				"dataType" : "HTML",
				"success" : function(data) {
					$(".fullcontainer").html(data);
					$(".fullcontainer").hide();
					$(".fullcontainer").fadeIn(250);
				}
			});
		});

		$(".logout").on("click", function(e) {
			e.preventDefault();
			$.ajax({
				"url" : "./html/navbarsl.html",
				"method" : "GET",
				"dataType" : "HTML",
				"success" : function(data) {
					$(".navbar").html(data);
				}
			});
			$.ajax({
				"url" : "./html/homesl.html",
				"method" : "GET",
				"dataType" : "HTML",
				"success" : function(data) {
					$(".fullcontainer").html(data);
					$(".fullcontainer").hide();
					$(".fullcontainer").fadeIn(250);

					$(".tohome").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/home.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".fullcontainer").html(data);
								$(".fullcontainer").hide();
								$(".fullcontainer").fadeIn(250);
							}
						});
						$.ajax({
							"url" : "./html/navbarcl.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".navbar").html(data);
							}
						});
					});

					$(".verjuegosl").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/verjuegosl.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".fullcontainer").html(data);
								$(".fullcontainer").hide();
								$(".fullcontainer").fadeIn(250);

								$(".tobuysl").on("click", function(e) {
									e.preventDefault();
									$.ajax({
										"url" : "./html/comprasl.html",
										"method" : "GET",
										"dataType" : "HTML",
										"success" : function(data) {
											$(".fullcontainer").html(data);
											$(".fullcontainer").hide();
											$(".fullcontainer").fadeIn(250);

											$(".slbtncontbuy").on("click", function(e) {
												e.preventDefault();
												$.ajax({
													"url" : "./html/comprasl2.html",
													"method" : "GET",
													"dataType" : "HTML",
													"success" : function(data) {
														$(".fullcontainer").html(data);
														$(".fullcontainer").hide();
														$(".fullcontainer").fadeIn(250);

														$(".slbtnconfbuy").on("click", function(e) {
															e.preventDefault();
															$.ajax({
																"url" : "./html/fincomprasl.html",
																"method" : "GET",
																"dataType" : "HTML",
																 "success" : function(data) {
																	$(".fullcontainer").html(data);
																	$(".fullcontainer").hide();
																	$(".fullcontainer").fadeIn(250);
																}
															});
														});
													}
												});
											})
										}
									});
								});
							}
						});
					});
				}
			});
		});	

		$(".top5li").webkitAnimationPlayState = "paused";

		$(".verjuego").on("click", function(e) {
			e.preventDefault();
			$.ajax({
				"url" : "./html/verjuego.html",
				"method" : "GET",
				"dataType" : "HTML",
				"success" : function(data) {
					$(".fullcontainer").html(data);
					$(".fullcontainer").hide();
					$(".fullcontainer").fadeIn(250);

					$(".top5li").webkitAnimationPlayState = "running";

					$(".tobuy").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/compracl.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".fullcontainer").html(data);
								$(".fullcontainer").hide();
								$(".fullcontainer").fadeIn(250);

								$(".volver").on("click", function(e) {
									e.preventDefault();
									$.ajax({
										"url" : "./html/verjuego.html",
										"method" : "GET",
										"dataType" : "HTML",
										"success" : function(data) {
											$(".fullcontainer").html(data);
											$(".fullcontainer").hide();
											$(".fullcontainer").fadeIn(250);

											$(".tobuy").on("click", function(e) {
												e.preventDefault();
												$.ajax({
													"url" : "./html/compracl.html",
													"method" : "GET",
													"dataType" : "HTML",
													"success" : function(data) {
														$(".fullcontainer").html(data);
														$(".fullcontainer").hide();
														$(".fullcontainer").fadeIn(250);

														$(".btncontbuy").on("click", function(e) {
															e.preventDefault();
															$.ajax({
																"url" : "./html/compracl2.html",
																"method" : "GET",
																"dataType" : "HTML",
																"success" : function(data) {
																	$(".fullcontainer").html(data);
																	$(".fullcontainer").hide();
																	$(".fullcontainer").fadeIn(250);
																}
															});
														});
													}
												});
											});
										}
									});
								});

								$(".btncontbuy").on("click", function(e) {
									e.preventDefault();
									$.ajax({
										"url" : "./html/compracl2.html",
										"method" : "GET",
										"dataType" : "HTML",
										"success" : function(data) {
											$(".fullcontainer").html(data);
											$(".fullcontainer").hide();
											$(".fullcontainer").fadeIn(250);

											$(".btnconfbuy").on("click", function(e) {
												e.preventDefault();
												$.ajax({
													"url" : "./html/fincompracl.html",
													"method" : "GET",
													"dataType" : "HTML",
													"success" : function(data) {
														$(".fullcontainer").html(data);
														$(".fullcontainer").hide();
														$(".fullcontainer").fadeIn(250);

														$(".toprofile, .toprofileav").on("click", function(e) {
															e.preventDefault();
															$.ajax({
																"url" : "./html/perfil.html",
																"method" : "GET",
																"dataType" : "HTML",
																"success" : function(data) {
																	$(".fullcontainer").html(data);
																	$(".fullcontainer").hide();
																	$(".fullcontainer").fadeIn(250);
																}
															});
														});
													}
												});
											});
										}
									});
								});
							}
						});
					});

					$(".tohome").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/home.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".fullcontainer").html(data);
								$(".fullcontainer").hide();
								$(".fullcontainer").fadeIn(250);
							}
						});
					});

					$(".todescrip").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/descripcion.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".bottomcontainer").html(data);
								$(".bottomcontainer").hide();
								$(".bottomcontainer").fadeIn(250);
							}
						});
					});

					$(".tohelp").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/ayuda.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".bottomcontainer").html(data);
								$(".bottomcontainer").hide();
								$(".bottomcontainer").fadeIn(250);
							}
						});
					});

					$(".tocomment").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/comentarios.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".bottomcontainer").html(data);
								$(".bottomcontainer").hide();
								$(".bottomcontainer").fadeIn(250);
								let params = {
			   						q: "Space Invaders",
			    					count: 20
			  					};
			  					tweetsArray.length = 0;
			  					searchTweets(params);
							}
						});
					});
				}
			});
		});

		let tweetsArray = [];
		let cb = new Codebird;
		cb.setConsumerKey("iOd7FdG7T3dE1asEHOFxLmdKr", "VdkGM4SSycjpkKrALkwbrO7aQiz696d6twGrVVRcYTvJDS00xQ");
		cb.setToken("1368012535-kTk798jfE3ySB8ObnlWCzqNJ8uydUqvFEfkTyAk", "NkBbB1mistXTu7JWC77gdCC1WMmRnNQVQarg6HHOijCca");

		$('.loading').hide();
	
		function searchTweets(params) {
	  		event.preventDefault();
	  		$('.loading').show();
	  		cb.__call(
	    		"search_tweets",
	    		params,
	    	function (reply) {
	    		if(reply.statuses.length == 0){
	        		$('.loading').hide();
	      		}
	      		else {
	        		for (var i = 0; i < reply.statuses.length; i++) {
	          			let tweet = reply.statuses[i];
	                			let json = {
	                  				src : tweet.user.profile_image_url,
	                 				user : tweet.user.screen_name,
	                 				text : tweet.text,
	                 				likes: tweet.favorite_count,
	                 				rts : tweet.retweet_count
	                			};
	                			tweetsArray.push(json);     
	              			
	          			 
	        		}
	        		console.log(tweetsArray.length);
	        		for (var i = 0; i < tweetsArray.length; i++) {
	          			$('.loading').hide();
	          			$('.d-block').css({
	            			"width": "60",
	            			"height":"50"
	          			});
	          			
              			$('.bottomcontainer').append('<div class="comentariosimple"><h2 class="usuario">'+
              										tweetsArray[i].user+'</h2><img class="d-block" src="'+tweetsArray[i].src+'">'+
              										tweetsArray[i].text+'<div class="heart"><i class="fa fa-heart" aria-hidden="true"></i></div>'+'<div class="likes">'+
              										tweetsArray[i].likes+'</div>'+'<div class="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></div>'+'<div class="rts">'+
              										tweetsArray[i].rts+'</div>');
	          			$('.heart').css({'animation':'latidos 1s infinite'});
	          			$('.heart').css({'animation':'3s color linear infinite'})
	        		}
	      		}
	    	},
	  	);
	};
});