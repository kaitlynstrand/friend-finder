<script>
$(".dropdown-menu li a").click(function() {

	$(this).parents(".btn-group").find(".selection").text($(this).text());
	$(this).parents(".btn-group").find(".selection").val($(this).text());
	console.log(this.text)
})
</script>
