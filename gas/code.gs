function postSlackbot() {
//SlackAPIで登録したボットのトークンを設定する
let token = "xoxb-2563598055044-2554680575046-0BEedZAphYNmPRUu2qR9jkZv";
//ライブラリから導入したSlackAppを定義し、トークンを設定する
let slackApp = SlackApp.create(token);
//Slackボットがメッセージを投稿するチャンネルを定義する
let channelId = "#general";
//Slackボットが投稿するメッセージを定義する
//let message = "SlackボットによるGASからの投稿メッセージです。"
//megにmyFunction4からの返り値を配列で入れている
//let msg = myFunction4();
//let msg1 = myFunction5();
//Logger.log(msg[0])
//Logger.log(msg[1])
//SlackAppオブジェクトのpostMessageメソッドでボット投稿を行う
//slackApp.postMessage(channelId,msg[0] +' : '+ msg[1]);
if (hikaku() ==true && myFunction7()=="ok"){
  Logger.log("logs")
  let msg1 = myFunction5();
  slackApp.postMessage(channelId,msg1[0] +' : '+ msg1[1]);
  Logger.log("dekitas")
}
}

function cancelSlack(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();//スプレッドシートの名前を取得
  const sheet = ss.getSheetByName('シート1');//スプレッドシートの中のシートの名前を取得
  const last = openSheet();
  //シートにtrueを代入
  sheet.getRange(last[1],4).setValue("false");//セルの書き込み

}
//指定した座標の値をゲット
function myFunction4(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();//スプレッドシートの名前を取得
  const sheet = ss.getSheetByName('シート1');//スプレッドシートの中のシートの名前を取得
  const range = sheet.getRange('A2');//セルの中身を獲得
  const range1 = sheet.getRange('B2');//セルの中身を獲得
  //console.log(range.getValue());//取得したセルの中身を表示
  let a = range.getValue();
  let b = range1.getValue();
  //配列にして代入
  let results = [a,b];
  return results;
}
function question(){
  
}
//1番下の値をゲット
function myFunction5(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();//スプレッドシートの名前を取得
  const sheet = ss.getSheetByName('シート1');//スプレッドシートの中のシートの名前を取得
  const last = openSheet();
  const range = sheet.getRange(last[1],1);//セルの中身を獲得
  const range1 = sheet.getRange(last[1],2);//セルの中身を獲得
  //console.log(range.getValue());//取得したセルの中身を表示
  let a = range.getValue();
  let b = range1.getValue();
  //配列にして代入
  let results = [a,b];
  sheet.getRange(last[1],4).setValue("false");//セルの書き込み
  return results;
}

function myFunction6(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();//スプレッドシートの名前を取得
  const sheet = ss.getSheetByName('シート1');//スプレッドシートの中のシートの名前を取得
  const last = openSheet();
  const range = sheet.getRange(last[1],3);//セルの中身を獲得
  let a = range.getValue();
  //配列にして代入
  return a;
}

function myFunction7(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();//スプレッドシートの名前を取得
  const sheet = ss.getSheetByName('シート1');//スプレッドシートの中のシートの名前を取得
  const last = openSheet();
  const range = sheet.getRange(last[1],4);//セルの中身を獲得
  let a = range.getValue();
  //配列にして代入
  Logger.log(a)
  return a;
}

function hikaku(){
  var d = new Date();
  var h = d.getHours();
  var min = d.getMinutes();
  var nowtime = h*3600+min*60;
  var beforetime = myFunction6();
  if (nowtime > beforetime-1 ){
    var result = true
  }else{
    var result = false
  }
  Logger.log(result);
  return result;
}


//スプレッドシートの長さをゲット
function openSheet() {
  //スプレッドシートのIDを取得している
  var id = SpreadsheetApp.getActiveSpreadsheet();
  //書き込むシートを取得している
  var ss = id.getSheetByName("シート1");
  var sss = ss.getLastRow();//シートの縦の長さを取得
  return [ss,sss];
}





