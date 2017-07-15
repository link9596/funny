Particle3D=function(material){
	THREE.Particle.call(this,material);
	this.velocity=new THREE.Vector3(0,0,0);//閫熷害;
	this.velocity.rotateX(10);//鏃嬭浆;
	this.gravity=new THREE.Vector3(0,0,0.5);//鍔犻€熷害;
	this.drag=1;//閫熷害鐩镐箻绯绘暟;
};
//Particle:绮掑瓙;
//prototype:鍘熷舰;
Particle3D.prototype=new THREE.Particle();
Particle3D.prototype.constructor=Particle3D;//鏋勯€犲嚱鏁?
Particle3D.prototype.updatePhysics=function(){
	this.velocity.multiplyScalar(this.drag);//鐭㈤噺鐩镐箻鍑芥暟
	this.velocity.addSelf(this.gravity);//鐭㈤噺鐩稿姞鍑芥暟
	this.position.addSelf(this.velocity);//鐭㈤噺鐩稿姞鍑芥暟
}
var TO_RADIANS=Math.PI/180;//瑙掑害鍚戝姬搴﹁浆鎹㈢郴鏁?*
THREE.Vector3.prototype.rotateY=function(angle){
	//缁昚杞撮『鏃堕拡鏃嬭浆angle;
	cosRY=Math.cos(angle*TO_RADIANS);
	sinRY=Math.sin(angle*TO_RADIANS);
	var tempz=this.z;
	var tempx=this.x;
	this.x=(tempx*cosRY)+(tempz*sinRY);
	this.z=(tempx*-sinRY)+(tempz*cosRY);
}
THREE.Vector3.prototype.rotateX=function(angle){
	//缁昘杞撮『鏃堕拡鏃嬭浆angle;
	cosRY=Math.cos(angle*TO_RADIANS);
	sinRY=Math.sin(angle*TO_RADIANS);
	var tempz=this.z;;
	var tempy=this.y;
	this.y=(tempy*cosRY)+(tempz*sinRY);
	this.z=(tempy*-sinRY)+(tempz*cosRY);
}
THREE.Vector3.prototype.rotateZ=function(angle){
	//缁昛杞撮『鏃堕拡鏃嬭浆angle;
	cosRY=Math.cos(angle*TO_RADIANS);
	sinRY=Math.sin(angle*TO_RADIANS);
	var tempx=this.x;;
	var tempy=this.y;
	this.y=(tempy*cosRY)+(tempx*sinRY);
	this.x=(tempy*-sinRY)+(tempx*cosRY);
}
function randomRange(min,max){
	return((Math.random()*(max-min))+ min);
}