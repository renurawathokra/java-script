<html>
<body>
<ul>
    <li id="firstItam">first list itam</li>
    <li>second list itam</li>
    <li>third list itam</li>
</ul>
<script type="text/javascript" charset="utf-8">
    var ulList=document.querySelector("ul");
    var removeId=document.getElementById("firstItam");
    ulList.removeChild(removeId);
</script>
</body>
</html>