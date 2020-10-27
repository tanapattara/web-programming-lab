<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member as member;

class memberController extends Controller
{
    public function getMembers()
    {
        $member_all = member::getAllMember();
        $data = array('members' => $member_all);
        //dd($data);
        return view('members', $data);
    }

    public function getMemberByID($id){
        $member = member::getMember($id);
        $data = array('member' => $member);
        return view('member', $data);
    }

    public function editMember(Request $req){
        $id = $req->input('id');
        $name = $req->input('name');
        $lastname = $req->input('lastname');
        $email = $req->input('email');
        $eduyear = $req->input('eduyear');
        $stuid = $req->input('stuid');

        $data = array(
            'first_name' => $name,
            'last_name' => $lastname,
            'email' => $email,
            'edu_year' => $eduyear,
            'student_id' => $stuid);
 
        $result = member::updateMember($id, $data);
 
        return redirect('/members');
    }

    public function newMember(){
        return view('member_new');
    }

    public function createNewMember(Request $req)
    {
        $name = $req->input('name');
        $lastname = $req->input('lastname');
        $email = $req->input('email');
        $eduyear = $req->input('eduyear');
        $stuid = $req->input('stuid');

        $data = array(
            'first_name' => $name,
            'last_name' => $lastname,
            'email' => $email,
            'edu_year' => $eduyear,
            'student_id' => $stuid,
            "major_id" => 1);
 
        $result = member::createMember($data);
 
        return redirect('/members');
    }

    public function deleteMember(Request $req){
        $id = $req->input('id');
        //dd($id);

        $result = member::deleteMember($id);

        return redirect('/members');
    }

}
