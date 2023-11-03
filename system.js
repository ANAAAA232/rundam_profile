function identity() 
{   
    document.getElementById('isang').innerHTML = "";
    document.getElementById('faust').innerHTML = "";
    document.getElementById('donki').innerHTML = "";
    document.getElementById('ryosyu').innerHTML = "";
    document.getElementById('muruso').innerHTML = "";
    document.getElementById('hongru').innerHTML = "";

    document.getElementById('hearth').innerHTML = "";
    document.getElementById('ishu').innerHTML = "";
    document.getElementById('rojion').innerHTML = "";
    document.getElementById('sincrea').innerHTML = "";
    document.getElementById('uters').innerHTML = "";
    document.getElementById('greg').innerHTML = "";
    
    //イサン
    var isang =['LCB 囚人','南部セブン協会 6課','剣契 殺手',
    '開花 E.G.O::壇香梅','奥歯事務所 フィクサー'];
    //ファウスト
    var faust =['LCB 囚人','W社 2級 整理要員',
    '生き残った ロボトミー職員','握る者',
    '南部ツヴァイ協会 4課','南部セブン協会 4課',
    'ロボトミー E.G.O::後悔'];
    //ドンキホーテ
    var donki =['LCB 囚人','W社 3級 整理要員','南部シ協会 5課',
    'N社 中槌','南部センク協会 5課 部長'];
    //良秀
    var ryosyu =['LCB 囚人','南部セブン協会 6課','黒雲会 若衆',
    'りょ・ミ・パ 厨房長','W社 3級 整理要員'];
    //ムルソー
    var muruso =['LCB 囚人','南部リウ協会 6課','W社 2級 整理要員',
    'N社 大槌','バラのスパナ工房 フィクサー',
    'R社第4群 サイチーム'];
    //ホンル
    var hongru =['LCB 囚人','黒雲会 若衆',
    'ぽんぽん派 ボス','南部リウ協会 5課',
    'K社 3級 摘出職職員','W社 2級 整理要員','鈎事務所 フィクサー'];
    //ヒースクリフ
    var hearth =['LCB 囚人','南部シ協会 5課',
    'R社第4群 ウサギチーム','N社 小槌',
    'ロボトミー E.G.O::狐雨','南部セブン協会 4課'];
    //イシュメール
    var ishu =['LCB 囚人','R社第4群 トナカイチーム',
    '南部シ協会 5課','LCCB 係長',
    'ロボトミー E.G.O::たぷつき','南部リウ協会 4課',
    '奥歯ボートセンター フィクサー'];
    //ロージャ
    var rojion =['LCB 囚人','黒雲会 若衆',
    'LCCB 係長','N社 中槌',
    'バラのスパナ工房 代表','南部ツヴァイ協会 5課',
    '南部ディエーチ協会 4課'];
    //シンクレア
    var sincrea =['LCB 囚人','剣契 殺手',
    '南部ツヴァイ協会 5課','マリアッチ ボス',
    '握らんとする者','ロボトミー E.G.O::紅籍',
    '奥歯ボートセンター フィクサー'];
    //ウーティス
    var uteirs =['LCB 囚人','剣契 組織員',
    'G社 部長','南部セブン協会 6課 部長',
    '奥歯事務所 フィクサー'];
    //グレゴール
    var greg =['LCB 囚人','南部リウ協会 6課',
    'G社 課長代理','りょ・ミ・パ 助手',
    'バラのスパナ工房 フィクサー','南部ツヴァイ協会 4課'];
    
    var sinners = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    sinnerShuffle(sinners);

    
    const form = document.forms.modeselect;
    var select = form.mode.value;
 
    // 人数の処理
    if(select=="100")
    {
        var ninzuu = Math.floor( Math.random() * 7)+1;
    }
    else if(select=="1000")
    {
        var ninzuu = Math.floor( Math.random() * 12)+1;
    }
    else
    {
        var ninzuu = select;
    }

    for(var i=0;i<ninzuu;i++)
    {              
        //イサン
        if(sinners[i]==1)
        {
            var randamisang = Math.floor( Math.random() * isang.length ); 
            var isangtext = isang[randamisang];   
            document.getElementById('isang').innerHTML = isangtext;
        }
        //ファウスト
        if(sinners[i]==2)
        {                
            var randamfaust = Math.floor( Math.random() * faust.length );    
            var fausttext = faust[randamfaust];
            document.getElementById('faust').innerHTML = fausttext;
        }
        //ドンキホーテ
        if(sinners[i]==3)
        {                
            var randamdonki = Math.floor( Math.random() * donki.length );  
            var donkitext = donki[randamdonki];  
            document.getElementById('donki').innerHTML = donkitext;
        }
        //良秀
        if(sinners[i]==4)
        {                
            var randamryosyu = Math.floor( Math.random() * ryosyu.length ); 
            var ryosyutext = ryosyu[randamryosyu];  
            document.getElementById('ryosyu').innerHTML = ryosyutext; 
        }
        //ムルソー
        if(sinners[i]==5)
        {                
            var randammuruso = Math.floor( Math.random() * muruso.length ); 
            var murusotext = muruso[randammuruso];   
            document.getElementById('muruso').innerHTML = murusotext;
        }
        //ホンル
        if(sinners[i]==6)
        {                
            var randamhongru = Math.floor( Math.random() * hongru.length ); 
            var hongrutext = hongru[randamhongru]; 
            document.getElementById('hongru').innerHTML = hongrutext;
        }
        //ヒースクリフ
        if(sinners[i]==7)
        {                
            var randamhearth = Math.floor( Math.random() * hearth.length );
            var hearthtext = hearth[randamhearth];
            document.getElementById('hearth').innerHTML = hearthtext; 
        }
        //イシュメール
        if(sinners[i]==8)
        {                
            var randamishu = Math.floor( Math.random() * ishu.length );   
            var ishutext = ishu[randamishu];
            document.getElementById('ishu').innerHTML = ishutext; 
        }
        //ロージャ
        if(sinners[i]==9)
        {                
            var randamrojion = Math.floor( Math.random() * rojion.length );  
            var rojiontext = rojion[randamrojion];
            document.getElementById('rojion').innerHTML = rojiontext;
        }
        //シンクレア
        if(sinners[i]==10)
        {                
            var randamsincrea = Math.floor( Math.random() * sincrea.length );    
            var sincreatext = sincrea[randamsincrea];
            document.getElementById('sincrea').innerHTML = sincreatext;
        }
        //ウーティス
        if(sinners[i]==11)
        {                
            var randamuteirs = Math.floor( Math.random() * uteirs.length );   
            var uteirstext = uteirs[randamuteirs]; 
            document.getElementById('uters').innerHTML = uteirstext;
        }
        //グレゴール
        if(sinners[i]==12)
        {                
            var randamgreg = Math.floor( Math.random() * greg.length ); 
            var gregtext = greg[randamgreg]; 
            document.getElementById('greg').innerHTML = gregtext;
        }
    }
    
}

function sinnerShuffle(array) 
{
    for(let i = (array.length - 1); 0 < i; i--)
    {  
      // 0〜(i+1)の範囲で値を取得
      let r = Math.floor(Math.random() * (i + 1));
  
      // 要素の並び替え
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
}