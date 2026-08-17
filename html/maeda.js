document.addEventListener('DOMContentLoaded',function(){
    const container = document.getElementById('flip-container');
    const inner = document.getElementById('flip-inner');
    const frontImg = document.getElementById('front-img');
    const backImg = document.getElementById('back-img');
    const images = [
        'img/seichou/saikin.jpg',
        'img/seichou/ハロウィン.jpg',
        'img/seichou/ぱわが.jpg',
        'img/seichou/幼少期.JPG'
    ];
    let currentAngle = 0;
    let currentIndex = 0;
    container.addEventListener('click',function(){
        currentAngle += 180;
        inner.style.transform = `rotateY(${currentAngle}deg)`;
        let nextIndex = (currentIndex + 1)% images.length;
        let nextNextIndex = (currentIndex +2)% images.length;
        setTimeout(function(){
            if(currentAngle % 360 !==0){
                frontImg.src = images[nextNextIndex];
            }
            else{
                backImg.src = images[nextNextIndex];
            }
        },300);
        currentIndex = nextIndex;
    });
});
// --- クリックで画像が切り替わる仕組み ---
document.querySelectorAll('.flip-img').forEach(img => {
  img.addEventListener('click', () => {
    // 1. 画像を小さくして「沈む」動きを実行
    img.classList.add('is-active');

    // 2. 表の画像と裏の画像を入れ替える
    const tempSrc = img.src;
    img.src = img.dataset.swapped;
    img.dataset.swapped = tempSrc;

    // 3. 0.15秒（150ミリ秒）待ってから元の大きさに戻す
    setTimeout(() => {
      img.classList.remove('is-active');
    }, 150); 
  });
});
// --- クリックで画像が切り替わる仕組み ---
document.querySelectorAll('.flip-img-favorite').forEach(img => {
  img.addEventListener('click', () => {
    // 1. 画像を小さくして「沈む」動きを実行
    img.classList.add('is-active');

    // 2. 表の画像と裏の画像を入れ替える
    const tempSrc = img.src;
    img.src = img.dataset.swapped;
    img.dataset.swapped = tempSrc;

    // 3. 0.15秒（150ミリ秒）待ってから元の大きさに戻す
    setTimeout(() => {
      img.classList.remove('is-active');
    }, 150); 
  });
});
// --- クリックで画像が切り替わる仕組み ---
document.querySelectorAll('.flip-img-qa').forEach(img => {
  img.addEventListener('click', () => {
    // 1. 画像を小さくして「沈む」動きを実行
    img.classList.add('is-active');

    // 2. 表の画像と裏の画像を入れ替える
    const tempSrc = img.src;
    img.src = img.dataset.swapped;
    img.dataset.swapped = tempSrc;

    // 3. 0.15秒（150ミリ秒）待ってから元の大きさに戻す
    setTimeout(() => {
      img.classList.remove('is-active');
    }, 150); 
  });
});