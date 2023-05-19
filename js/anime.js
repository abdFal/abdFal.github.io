var Stars = function (args) {
  if (args === undefined) args = {};
  var _scope = this;

  this.stars = [];
  this.vel = args.vel || 1;
  this.radius = args.radius || 1;
  this.alpha = 0.5;
  this.starsCounter = args.stars || 300;
  var canvas, context;

  this.init = function () {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    context.lineCap = "round";
    this.resize();
    this.start();
    this.animate();
    window.addEventListener("resize", this.resize.bind(this));
  };

  this.start = function () {
    this.stars = [];
    for (var i = 0; i < this.starsCounter; i++) {
      setTimeout(function () {
        _scope.stars.push(new Star());
      }, i * 30);
    }
  };

  this.resize = function () {
    var container = document.querySelector(".canvas-container");
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  };

  this.animate = function () {
    context.fillStyle = "#00021a";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "white";
    for (var i = 0; i < this.stars.length; i++) {
      this.stars[i].update();
    }
    requestAnimationFrame(this.animate.bind(this));
  };

  var Star = function () {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.init = function () {
      this.radius = Math.random() * _scope.radius;
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.lineWidth = 0;
      this.vel = {
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
      };
    };

    this.update = function () {
      this.vel.x *= 1.05;
      this.vel.y *= 1.05;
      this.lineWidth += 0.035;
      this.x0 = this.x;
      this.y0 = this.y;
      this.x += this.vel.x;
      this.y += this.vel.y;
      this.draw();
      if (this.isDead()) {
        this.init();
      }
    };

    this.draw = function () {
      context.beginPath();
      context.moveTo(this.x0, this.y0);
      context.lineTo(this.x, this.y);
      context.lineWidth = this.lineWidth;
      context.stroke();
    };

    this.isDead = function () {
      return (
        this.x < 0 ||
        this.x > canvas.width ||
        this.y < 0 ||
        this.y > canvas.height
      );
    };

    this.init();
    return this;
  };

  this.init();
};

var _stars = new Stars({ stars: 59 });
