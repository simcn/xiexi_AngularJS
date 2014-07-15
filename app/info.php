<?php 

$id = $_GET['id'];

$name = array('iphone','sony','小米');
$info = array('小米的LOGO是一个“MI”形','是Mobile Internet的缩写','代表小米是一家移动互联网公司');
$data = array(
    'id'=>$id,
    'title'=>$name[$id],
    'info'=>$info[$id],
    'img'=>'http://prototype.you.dev.nt.ctripcorp.com/getimg.php?100x100x'.$id
);

echo json_encode($data);

?>