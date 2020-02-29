var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "Fruits/Orange.jpg";
imgArray[7] = new Image()
imgArray[7].src = "Fruits/Orange.jpg"

imgArray[1] = new Image();
imgArray[1].src = "Fruits/Kiwi.jpg"
imgArray[10] = new Image();
imgArray[10].src = "Fruits/Kiwi.jpg"

imgArray[2] = new Image();
imgArray[2].src = "Fruits/Grapes.jpg"
imgArray[9] = new Image();
imgArray[9].src = "Fruits/Grapes.jpg"

imgArray[3] = new Image();
imgArray[3].src = "Frutis/Strawberry.png"
imgArray[4] = new Image();
imgArray[4].src = "Frutis/Strawberry.png"

imgArray[5] = new Image();
imgArray[5].src = "/Fruits/Pear.jpg"
imgArray[13] = new Image();
imgArray[13].src = "/Fruits/Pear.jpg"

imgArray[6] = new Image();
imgArray[6].src = "/Fruits/Plum.jpg"
imgArray[12] = new Image();
imgArray[12].src = "/Fruits/Plum.jpg"

imgArray[8] = new Image();
imgArray[8].src = "/Fruits/Banana.jpg"
imgArray[15] = new Image();
imgArray[15].src = "/Fruits/Banana.jpg"

imgArray[11] = new Image();
imgArray[11].src = "/Fruits/Cherry.jpg"
imgArray[14] = new Image();
imgArray[14].src = "/Fruits/Cherry.jpg"

$('document').ready(function() {
    $("#ButtonC0").hide()
    $("#ButtonC1").hide()
    $("#ButtonC2").hide()
    $("#ButtonC3").hide()
    $("#ButtonC4").hide()
    $("#ButtonC5").hide()
    $("#ButtonC6").hide()
    $("#ButtonC7").hide()
    $("#ButtonC8").hide()
    $("#ButtonC9").hide()
    $("#ButtonC10").hide()
    $("#ButtonC11").hide()
    $("#ButtonC12").hide()
    $("#ButtonC13").hide()
    $("#ButtonC14").hide()
    $("#ButtonC15").hide()

});
    var img1, img2, id1, id2;

    function getId(value){
        var len = value.length;
        var id = value[len - 2] + value[len - 1];
        var exist = false;
        for(var i = 0; i <= 9 && !exist; i++){
            if(id[0] == i){
                exist = true;
            }
        }
        if(!exist){
            id = id.slice(1);
        }
        return id;
    }
    
    $("#Button0").click(function(){
        $("#Button0").hide()
        $("#ButtonC0").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button1").click(function(){
        $("#Button1").hide()
        $("#ButtonC1").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });


    $("#Button2").click(function(){
        $("#Button2").hide()
        $("#ButtonC2").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button3").click(function(){
        $("#Button3").hide()
        $("#ButtonC3").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button4").click(function(){
        $("#Button4").hide()
        $("#ButtonC4").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button5").click(function(){
        $("#Button5").hide()
        $("#ButtonC5").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button6").click(function(){
        $("#Button6").hide()
        $("#ButtonC6").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button7").click(function(){
        $("#Button7").hide()
        $("#ButtonC7").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button8").click(function(){
        $("#Button8").hide()
        $("#ButtonC8").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button9").click(function(){
        $("#Button9").hide()
        $("#ButtonC9").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button10").click(function(){
        $("#Button10").hide()
        $("#ButtonC10").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button11").click(function(){
        $("#Button11").hide()
        $("#ButtonC11").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button12").click(function(){
        $("#Button12").hide()
        $("#ButtonC12").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button13").click(function(){
        $("#Button13").hide()
        $("#ButtonC13").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button14").click(function(){
        $("#Button14").hide()
        $("#ButtonC14").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#Button15").click(function(){
        $("#Button15").hide()
        $("#ButtonC15").show()
        if(img1 === undefined){
            var value = $(this).attr("id");
            id1 = getId(value);
            img1 = imgArray[id1].src;
        } else if(img2 === undefined){
            var value = $(this).attr("id");
            id2 = getId(value);
            img2 = imgArray[id2].src;
            if(img1 !== img2){
                setTimeout(function(){
                    var button1 = "#Button" + id1;
                    var buttonC1 = "#ButtonC" + id1;
                    var button2 = "#Button" + id2;
                    var buttonC2 = "#ButtonC" + id2;
                    $(button1).show();
                    $(buttonC1).hide();
                    $(button2).show();
                    $(buttonC2).hide();
                }, 500);   
            }
            setTimeout(function(){
                img1 = undefined;
                img2 = undefined;
                id1 = undefined;
                id2 = undefined;
            }, 1000);
        }
    });

    $("#GiveUp").click(function(){
        $(".Button1").hide()
        $(".ButtonC").show()
    })

    
    $("#Reset").click(function(){
        $(".ButtonC").hide()
        $(".Button1").show()
    });




