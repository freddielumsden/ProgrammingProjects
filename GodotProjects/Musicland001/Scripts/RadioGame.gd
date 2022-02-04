extends Node2D



var c_entered = false
var d_entered = false
var e_entered = false
var f_entered = false
var g_entered = false
var a_entered = false
var b_entered = false

func _ready():
	Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)

func _process(delta):
	if c_entered and Input.is_action_pressed("Left_Mouse_Button"):
		print("C Pressed")
		$"RadioCPressed".show()
		$"RadioDPressed".hide()
		$"RadioEPressed".hide()
		$"RadioFPressed".hide()
		$"RadioGPressed".hide()
		$"RadioAPressed".hide()
		$"RadioBPressed".hide()
	elif d_entered and Input.is_action_pressed("Left_Mouse_Button"):
		print("D Pressed")
		$"RadioDPressed".show()
		$"RadioCPressed".hide()
		$"RadioEPressed".hide()
		$"RadioFPressed".hide()
		$"RadioGPressed".hide()
		$"RadioAPressed".hide()
		$"RadioBPressed".hide()
	elif e_entered and Input.is_action_pressed("Left_Mouse_Button"):
		print("E Pressed")
		$"RadioEPressed".show()
		$"RadioCPressed".hide()
		$"RadioDPressed".hide()
		$"RadioFPressed".hide()
		$"RadioGPressed".hide()
		$"RadioAPressed".hide()
		$"RadioBPressed".hide()
	elif f_entered and Input.is_action_pressed("Left_Mouse_Button"):
		print("F Pressed")
		$"RadioFPressed".show()
		$"RadioCPressed".hide()
		$"RadioDPressed".hide()
		$"RadioEPressed".hide()
		$"RadioGPressed".hide()
		$"RadioAPressed".hide()
		$"RadioBPressed".hide()
	elif g_entered and Input.is_action_pressed("Left_Mouse_Button"):
		print("G Pressed")
		$"RadioGPressed".show()
		$"RadioCPressed".hide()
		$"RadioDPressed".hide()
		$"RadioEPressed".hide()
		$"RadioFPressed".hide()
		$"RadioAPressed".hide()
		$"RadioBPressed".hide()
	elif a_entered and Input.is_action_pressed("Left_Mouse_Button"):
		print("A Pressed")
		$"RadioAPressed".show()
		$"RadioCPressed".hide()
		$"RadioDPressed".hide()
		$"RadioEPressed".hide()
		$"RadioFPressed".hide()
		$"RadioGPressed".hide()
		$"RadioBPressed".hide()
	elif b_entered and Input.is_action_pressed("Left_Mouse_Button"):
		print("B Pressed")
		$"RadioBPressed".show()
		$"RadioCPressed".hide()
		$"RadioDPressed".hide()
		$"RadioEPressed".hide()
		$"RadioFPressed".hide()
		$"RadioGPressed".hide()
		$"RadioAPressed".hide()
	else:	
		$"RadioCPressed".hide()
		$"RadioDPressed".hide()
		$"RadioEPressed".hide()
		$"RadioFPressed".hide()
		$"RadioGPressed".hide()
		$"RadioAPressed".hide()
		$"RadioBPressed".hide()


func _on_C_Collision_mouse_entered():
	c_entered = true
	d_entered = false
	e_entered = false
	f_entered = false
	g_entered = false
	a_entered = false
	b_entered = false
	

func _on_D_Collision_mouse_entered():
	c_entered = false
	d_entered = true
	e_entered = false
	f_entered = false
	g_entered = false
	a_entered = false
	b_entered = false


func _on_E_Collision_mouse_entered():
	c_entered = false
	d_entered = false
	e_entered = true
	f_entered = false
	g_entered = false
	a_entered = false
	b_entered = false


func _on_F_Collision_mouse_entered():
	c_entered = false
	d_entered = false
	e_entered = false
	f_entered = true
	g_entered = false
	a_entered = false
	b_entered = false


func _on_G_Collision_mouse_entered():
	c_entered = false
	d_entered = false
	e_entered = false
	f_entered = false
	g_entered = true
	a_entered = false
	b_entered = false


func _on_A_Collision_mouse_entered():
	c_entered = false
	d_entered = false
	e_entered = false
	f_entered = false
	g_entered = false
	a_entered = true
	b_entered = false


func _on_B_Collision_mouse_entered():
	c_entered = false
	d_entered = false
	e_entered = false
	f_entered = false
	g_entered = false
	a_entered = false
	b_entered = true


func _on_Piano_mouse_exited():
	print("Piano Exited")
	

func _on_Piano_mouse_entered():
	print("Exited")
	$"RadioCPressed".hide()
	$"RadioDPressed".hide()
	$"RadioEPressed".hide()
	$"RadioFPressed".hide()
	$"RadioGPressed".hide()
	$"RadioAPressed".hide()
	$"RadioBPressed".hide()
	c_entered = false
	d_entered = false
	e_entered = false
	f_entered = false
	g_entered = false
	a_entered = false
	b_entered = false


func _on_BackToHub_pressed():
	get_tree().change_scene("res://Scenes/Main.tscn")
