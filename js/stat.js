'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_SIZE = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var GAP_HEIGHT = 20;
var GIST_HEIGHT = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderText = function (ctx, x, y, text) {
  ctx.fillStyle = '#000';
  ctx.fontStyle = FONT_SIZE + 'px PT Mono';
  ctx.fillText(text, x, y);
};

var renderBar = function (ctx, name, time, index, maxTime) {
  ctx.fillText(name, CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * index, CLOUD_HEIGHT - GAP);
  ctx.fillStyle = (name === 'Вы') ? 'red' : 'hsl(240, ' + Math.random() * 100 + '% , 50% )';
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * index, CLOUD_HEIGHT - GAP - GAP_HEIGHT - (time / maxTime) * GIST_HEIGHT, BAR_WIDTH, (time / maxTime) * GIST_HEIGHT);
  ctx.fillStyle = '#000';
  ctx.fillText(Math.round(time), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * index, CLOUD_HEIGHT - GAP - GAP - (time / maxTime) * GIST_HEIGHT - GAP_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, CLOUD_X + GAP_HEIGHT, CLOUD_Y + GAP + GAP_HEIGHT, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + GAP_HEIGHT, CLOUD_Y + GAP + GAP_HEIGHT + GAP_HEIGHT, 'Список результатов:');
  for (var i = 0; i < names.length; i++) {
    renderBar(ctx, names[i], times[i], i, maxTime);
  }
};
