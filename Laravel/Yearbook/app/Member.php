<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Member extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'edu_year', 'student_id', 'major_id', 'position', 'company',
    ];

    public static function getAllMember(){
        return DB::table('member')->get();
    }
    public static function getMember($id){
        return DB::table('member')->where('id', '=', $id)->first();
    }
    public static function updateMember($id, $data){
        return DB::table('member')->where('id', $id)->update($data);
    }
    public static function createMember($data){
        return DB::table('member')->insert($data);
    }

    public static function deleteMember($id){
        return DB::table('member')->where('id', $id)->delete();
    }
}
