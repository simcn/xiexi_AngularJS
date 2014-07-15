<?php 
$data = array();

$name = array('iphone','sony','小米');
$info = array('小米的LOGO是一个“MI”形','是Mobile Internet的缩写','代表小米是一家移动互联网公司');

for($i=0; $i<3; $i++){
    $data[$i] = array(
        'id'=>$i,
        'name'=>$name[$i],
        'snippet'=>$info[$i],
        'age'=>rand(0,100),
        'imageUrl'=>'http://prototype.you.dev.nt.ctripcorp.com/getimg.php?100x100x'.intval($i+1)
    );
}
echo json_encode($data);
?>